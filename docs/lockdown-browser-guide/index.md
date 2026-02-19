---
title: Lockdown Browser Guide
description: Complete guide for downloading, installing, and setting up the Recruit41 Lockdown Browser
hide:
  - navigation
  - toc
  - footer
  - path
---

<style>
/* Hide all navigation elements for standalone page */
.md-header__inner .md-tabs,
.md-header nav.md-tabs,
.md-tabs,
.md-search,
.md-header__button:not(.md-logo),
.md-footer__inner,
.md-footer-meta,
.md-footer nav,
.md-sidebar,
.md-sidebar--primary,
.md-sidebar--secondary {
  display: none !important;
}

/* Disable all internal navigation links */
a[href^="/"], a[href^="../"], a[href^="./"] {
  pointer-events: none;
  cursor: default;
}

/* But keep anchor links and external links clickable */
a[href^="#"], a[href^="http"], a[href^="mailto"], a[href$=".pdf"] {
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* Make the logo non-clickable */
.md-header__button.md-logo {
  pointer-events: none;
  cursor: default;
}

/* Center the content and give it full width */
.md-content {
  max-width: 900px;
  margin: 0 auto;
}

.md-main__inner {
  max-width: 100%;
}

.md-main__inner .md-content {
  margin-left: auto;
  margin-right: auto;
}
</style>

# Recruit41 Lockdown Browser - Help Guide

The Recruit41 Desktop App creates a secure environment for your AI-powered video interview. This guide walks you through downloading, installing, and setting up the app.

!!! tip
    The entire setup takes about 2 minutes. Make sure you have a working camera and microphone before starting.

---

## Video Installation Guides

Follow the video guide for your operating system:

=== "Windows"
    <div class="video-container" style="margin: 2rem 0;">
      <video controls width="100%" style="border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <source src="../assets/videos/lockdown-browser/windows.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="text-align: center; color: #666; font-size: 0.9em; margin-top: 0.5rem;">
        <em>Windows installation guide</em>
      </p>
    </div>

=== "macOS"
    <div class="video-container" style="margin: 2rem 0;">
      <video controls width="100%" style="border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <source src="../assets/videos/lockdown-browser/mac.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="text-align: center; color: #666; font-size: 0.9em; margin-top: 0.5rem;">
        <em>macOS installation guide</em>
      </p>
    </div>

---

## Additional Resources

<div style="margin: 2rem 0; padding: 1.5rem; background: #fff8e1; border-radius: 8px; border-left: 4px solid #ff914d;">
  <h3 style="margin-top: 0;">Detailed Setup Guide (PDF)</h3>
  <p>Download the comprehensive setup guide for offline reference.</p>
  <a href="../assets/videos/7edge.pdf" target="_blank" style="display: inline-block; padding: 0.6rem 1.2rem; background: #ff914d; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">Download PDF Guide</a>
</div>

---

## Troubleshooting

### Camera not working

1. Check that no other app is using your camera (close Zoom, FaceTime, etc.)
2. Go to **System Settings → Privacy & Security → Camera** and enable Recruit41
3. Restart the app

### Microphone not detected

1. Check your microphone is plugged in (for external mics)
2. Select the correct microphone from the dropdown in the app
3. Go to **System Settings → Privacy & Security → Microphone** and enable Recruit41

### "Prohibited app detected" error

Close any of these applications before starting:
- TeamViewer, AnyDesk, RustDesk (remote desktop tools)
- Interview helper tools (Cluly, Interview Coder, Control Potato)

### App won't launch from website

1. Make sure you've downloaded and installed the app first
2. Try clicking **Launch Desktop App** again
3. If it still doesn't work, open the app manually from your Applications folder

### Multiple displays detected

Disconnect external monitors before starting. The app requires a single display for security.

---

## Privacy & Security

- Your camera and microphone are only active **during the interview**
- Screen activity is monitored for prohibited apps only — **we don't record your screen**
- Running process names are checked against a blocklist — **we don't access your files**
- All monitoring stops immediately when the interview ends
- Data is retained per our [privacy policy](https://recruit41.com/privacy)
