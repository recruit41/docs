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
   - View candidates only? → Tenant User
   - Create jobs and interviews? → Tenant Admin

2. **Which jobs do they need access to?**
   - All jobs? → Tenant-level access
   - Specific jobs only? → Job-level restrictions

3. **Is this access temporary?**
   - Set a reminder to review and revoke if needed

### Common Scenarios

| Scenario | Recommended Access |
| :--- | :--- |
| New recruiter onboarding | Tenant User (view only initially) |
| Hiring manager for one role | Tenant User + specific job access |
| HR administrator | Tenant Admin |
| External recruitment agency | Tenant User + limited job access |

---

## Regular Access Reviews

!!! info "Best Practice"
    Review team access quarterly to ensure it still aligns with current responsibilities.

- Remove access for team members who have left
- Downgrade access for those who no longer need admin privileges
- Audit who has access to sensitive roles (executive searches, etc.)
