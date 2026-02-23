// Persist navigation open/closed states across page navigations
// Sections stay open once manually expanded, even when clicking other pages
(function () {
  var KEY = "r41-nav-open";

  function getStates() {
    try { return JSON.parse(sessionStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }

  function setState(id, open) {
    var s = getStates();
    if (open) { s[id] = true; } else { delete s[id]; }
    sessionStorage.setItem(KEY, JSON.stringify(s));
  }

  function restoreAndBind() {
    var states = getStates();
    document.querySelectorAll(".md-nav__toggle").forEach(function (el) {
      if (!el.id) return;
      // Restore saved open state
      if (states[el.id]) el.checked = true;
      // Bind change listener once
      if (!el.dataset.navBound) {
        el.dataset.navBound = "1";
        el.addEventListener("change", function () {
          setState(this.id, this.checked);
        });
      }
    });
  }

  // Run on initial page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restoreAndBind);
  } else {
    restoreAndBind();
  }

  // Re-run after MkDocs Material instant navigation page transitions
  var poll = setInterval(function () {
    if (typeof document$ !== "undefined") {
      clearInterval(poll);
      document$.subscribe(restoreAndBind);
    }
  }, 50);
  setTimeout(function () { clearInterval(poll); }, 5000);
})();
