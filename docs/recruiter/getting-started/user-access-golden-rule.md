# User Access Golden Rule

Understanding the principle of minimum access for team security and compliance.

---

## The Key Principle

!!! tip "Golden Rule"
    Every team member should have the minimum access level required for their role.

This simple principle is the foundation of secure platform management.

---

## Why This Matters

| Benefit | Description |
| :--- | :--- |
| **Data Security** | Sensitive candidate information stays protected |
| **Audit Trail** | Clear accountability for who made changes |
| **Prevent Accidents** | Avoid unintended modifications to interview configs |
| **Compliance** | Meet data protection requirements (GDPR, SOC2) |

---

## Applying the Golden Rule

### Ask These Questions

Before assigning access:

1. **What does this person need to do?**
   - View candidates only? → **Viewer** role on the job
   - Manage candidate pipeline? → **Recruiter** role on the job
   - Design interviews and manage team? → **Job Owner** role on the job
   - Manage all users and settings? → **Account Admin**

2. **Which jobs do they need access to?**
   - All jobs? → Account Admin (automatic access) or add to each job
   - Specific jobs only? → Add as a team member on those jobs

3. **Is this access temporary?**
   - Set a reminder to review and revoke if needed

### Common Scenarios

| Scenario | Recommended Access |
| :--- | :--- |
| New recruiter onboarding | **Recruiter** on assigned jobs |
| Hiring manager for one role | **Job Owner** on their job |
| HR administrator | **Account Admin** |
| External recruitment agency | **Recruiter** on limited jobs only |
| Department lead reviewing results | **Viewer** on relevant jobs |

---

## Regular Access Reviews

!!! info "Best Practice"
    Review team access quarterly to ensure it still aligns with current responsibilities.

- Remove access for team members who have left
- Downgrade roles for those who no longer need elevated privileges
- Audit who has access to sensitive roles (executive searches, etc.)
- Use the **Role Guide** in the platform to remind yourself of each role's permissions
