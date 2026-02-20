# How to Manage Permission Settings

Control access with role-based permissions to protect sensitive data.

---

## Permission Guidelines by Role

| Role | Scenario | Recommended Access |
| :--- | :--- | :--- |
| New recruiter | Learning the platform | **Recruiter** on assigned openings |
| Experienced recruiter | Day-to-day pipeline management | **Recruiter** on their openings |
| Hiring manager | Designs interviews, manages team | **Job Owner** on their openings |
| HR admin | Billing, settings, org-wide control | **Account Admin** |
| External agency | Limited openings only | **Recruiter** on specific openings |
| Stakeholder / Observer | Needs visibility only | **Viewer** on relevant openings |

---

## Organization-Level vs Job-Level Access

### Organization-Level Roles

Apply to the entire platform:

| Role | Capabilities |
| :--- | :--- |
| **Account Admin** | Full access to all features, settings, and every opening |
| **Member** | Access only to openings they are explicitly assigned to |

### Job-Level Roles

Assigned per opening to control what a member can do within that opening:

| Role | Capabilities |
| :--- | :--- |
| **Job Owner** | Full control — edit plans, manage team, configure settings |
| **Recruiter** | Pipeline management — invite candidates, view plans, export data |
| **Viewer** | Read-only — view candidates and results |

---

## Setting Up Job-Level Access

### Adding Team Members to an Opening

1. Open the opening and go to the **Team Members** tab
2. Click **"Add Member"**
3. Search for the team member
4. Select their role (**Job Owner**, **Recruiter**, or **Viewer**)
5. Click **"Add"**

### Changing a Role

1. Open the opening's **Team Members** tab
2. Find the team member
3. Click on their current role
4. Select the new role

### Removing Access

1. Open the opening's **Team Members** tab
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
    Give users only the minimum access they need to do their job. Start with **Recruiter** or **Viewer** and upgrade as needed.

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

We log all actions for compliance:

### What's Tracked

- User login/logout times
- Candidate data access
- Interview plan modifications
- Status changes
- Email communications
- Export activities

### Accessing Audit Logs

1. Go to **Settings** (Account Admin only)
2. Select **Audit Log**
3. Filter by user, action, or date
4. Export if needed

---

## Compliance Considerations

### GDPR (the European data privacy regulation)

- Candidates can request their data
- Data must be deletable on request
- Access must be logged
- Only necessary data should be collected

### SOC 2 (a security certification standard)

- Role-based access control with granular permissions
- Audit logging enabled
- Regular access reviews
- Incident response procedures

---

## Common Permission Scenarios

### Scenario 1: External Recruiter

An external recruiting agency needs to help with hiring.

**Setup:**

1. Add them as a **Member** at the organization level
2. Assign **Recruiter** role on specific openings only
3. They can invite candidates and view results but cannot edit plans or manage team
4. Review access monthly

### Scenario 2: Hiring Manager

A department head needs to design and review interviews.

**Setup:**

1. Add them as a **Member** at the organization level
2. Assign **Job Owner** role on their department's openings
3. They get full control over their openings with no access to other departments
4. Regular permission audits

### Scenario 3: Interview Observer

A team member needs to watch interviews but not make decisions.

**Setup:**

1. Add them as a **Member** at the organization level
2. Assign **Viewer** role on relevant openings
3. They can view candidates and results but cannot take any actions
4. Can view recordings and scores

---

## FAQ

??? question "Can a Recruiter create jobs?"
    A Recruiter gains the ability to create new jobs once they are also a **Job Owner** on at least one opening.

??? question "Can I have multiple Account Admins?"
    Yes. You can have as many admins as needed, but we recommend limiting admin access to those who truly need it.

??? question "What happens when someone leaves the company?"
    Remove their access immediately via **Organization Users**. Their actions remain in the audit log.

??? question "How do I check what permissions each role has?"
    Use the **Role Guide** button on the Organization Users or Team Members page. It shows a visual comparison of all roles and permissions.
