# Restrictive Permissions

Control access with role-based permissions to protect sensitive data.

---

## Permission Guidelines by Role

| Role | Scenario | Access Level |
| :--- | :--- | :--- |
| New recruiter | Learning the platform | Tenant User |
| Experienced recruiter | Day-to-day operations | Tenant User |
| Hiring manager | Designs interviews | Tenant Admin |
| HR admin | Billing and settings | Tenant Admin |
| External agency | Limited jobs only | Tenant User + Job-specific |

---

## Tenant-Level vs Job-Level Access

### Tenant-Level Roles

Apply to the entire platform:

| Role | Capabilities |
| :--- | :--- |
| **Tenant Admin** | Full access to all features and settings |
| **Tenant User** | View and interact with assigned jobs only |

### Job-Level Access

Additional restrictions for specific jobs:

- **Full Access**: Can view, edit, and manage candidates
- **View Only**: Can view but not modify
- **No Access**: Cannot see the job at all

---

## Setting Up Job-Level Access

### Adding Team Members to a Job

1. Go to the job's **Team Access** page
2. Click **"Add Member"**
3. Select the team member
4. Choose their access level
5. Click **"Save"**

### Removing Access

1. Go to the job's **Team Access** page
2. Find the team member
3. Click **"Remove"**
4. Confirm the action

---

## When to Use Job-Level Restrictions

| Scenario | Use Restriction? | Why |
| :--- | :--- | :--- |
| Confidential executive search | Yes | Limit visibility to senior team |
| Department-specific hiring | Yes | Only relevant team needs access |
| General open positions | No | Broad team collaboration helpful |
| External agency involvement | Yes | Limit to specific assigned roles |
| Sensitive salary information | Yes | Protect compensation data |

---

## Access Control Best Practices

### Principle of Least Privilege

!!! tip "Key Principle"
    Give users only the minimum access they need to do their job.

Benefits:

- Reduces risk of accidental changes
- Protects sensitive candidate data
- Simplifies compliance audits
- Clear accountability for actions

### Regular Access Reviews

| Frequency | Task |
| :--- | :--- |
| Monthly | Review active user list |
| Quarterly | Audit job-level permissions |
| On role change | Update permissions immediately |
| On departure | Remove access same day |

---

## Audit Trail

All actions are logged for compliance:

### What's Tracked

- User login/logout times
- Candidate data access
- Interview plan modifications
- Status changes
- Email communications
- Export activities

### Accessing Audit Logs

1. Go to **Settings** (Admin only)
2. Select **Audit Log**
3. Filter by user, action, or date
4. Export if needed

---

## Compliance Considerations

### GDPR Requirements

- Candidates can request their data
- Data must be deletable on request
- Access must be logged
- Only necessary data should be collected

### SOC2 Alignment

- Role-based access control
- Audit logging enabled
- Regular access reviews
- Incident response procedures

---

## Common Permission Scenarios

### Scenario 1: External Recruiter

An external recruiting agency needs to help with hiring.

**Setup:**

1. Create Tenant User account
2. Add to specific jobs only
3. Set to "View Only" for sensitive roles
4. Review access monthly

### Scenario 2: Hiring Manager

A department head needs to design and review interviews.

**Setup:**

1. Create Tenant Admin account
2. Full access to their department's jobs
3. No access to other departments
4. Regular permission audits

### Scenario 3: Interview Observer

A team member needs to watch interviews but not make decisions.

**Setup:**

1. Create Tenant User account
2. Add to relevant jobs as "View Only"
3. Cannot modify candidates or settings
4. Can view recordings and scores

---

## FAQ

??? question "Can a Tenant User create jobs?"
    No. Only Tenant Admins can create new job openings.

??? question "Can I have multiple Tenant Admins?"
    Yes. You can have as many admins as needed, but we recommend limiting admin access to those who truly need it.

??? question "What happens when someone leaves the company?"
    Remove their access immediately via Portal Access. Their actions remain in the audit log.
