# FAQ and Best Practices

This section covers best practices for data quality, integrations, security, testing, and permissions management.

---

## Data Quality Management

| Practice | Why It Matters |
| :--- | :--- |
| **Verify emails before upload** | Prevents bounce-backs and failed invitations |
| **Use consistent naming** | Makes search and filtering easier |
| **Regular cleanup** | Archive stale applications to keep dashboard clean |
| **Standardize tags** | Enables meaningful filtering and reporting |

### Email Validation Tips

Before uploading a CSV:

1. Remove any rows with empty email fields
2. Check for common typos (.con vs .com, .gmal vs .gmail)
3. Remove duplicate emails
4. Verify email format (must contain @ and valid domain)

### Maintaining Clean Data

- **Weekly**: Review and archive abandoned candidates
- **Monthly**: Clean up inactive job postings
- **Quarterly**: Audit team member access and remove inactive users

---

## Calendar & Email Integration

### Email Follow-up Cadence

| Day | Action |
| :--- | :--- |
| Day 0 | Initial invitation sent |
| Day 3 | First reminder |
| Day 5 | Second reminder |
| Day 7 | Final reminder |

!!! tip "Response Rates"
    Candidates are most likely to respond within the first 48 hours. If no response after the final reminder, consider moving to the next candidate.

### Email Best Practices

1. **Send at optimal times** - Use peak activity data to time your emails
2. **Personalize communications** - Use candidate name and job title placeholders
3. **Clear subject lines** - Include company name and action needed
4. **Mobile-friendly** - Keep emails concise for mobile reading

### Scheduling Considerations

- Set interview deadlines that give candidates at least 5-7 days
- Avoid deadlines on weekends or holidays
- Consider time zones for international candidates
- Plan review sessions 1-2 days after deadline

---

## Security & Pre-Meeting Checks

### Security Checklist

Use this checklist to ensure your interviews are secure:

- [ ] Proctoring enabled for high-stakes roles
- [ ] Camera required for all video interviews
- [ ] Pre-meeting checks enabled
- [ ] Browser restrictions communicated to candidates
- [ ] Session timeouts configured

### Pre-Meeting Checks Configuration

| Check | What It Verifies | Recommended |
| :--- | :--- | :--- |
| **Browser** | Using supported browser | Always on |
| **Camera** | Camera is working | Always on |
| **Microphone** | Mic is working and clear | Always on |
| **Network** | Stable internet connection | Always on |
| **Screen Share** | Can share entire screen | For coding roles |

### Proctoring by Role Type

| Role Type | Recommended Settings |
| :--- | :--- |
| Entry-level | Camera only |
| Mid-level | Camera + Pre-meeting checks |
| Senior/Leadership | Camera + Screen share + Monitor detection |
| High-security/Compliance | All options enabled |

### Browser Requirements

Communicate these requirements to candidates:

- Google Chrome (recommended)
- Desktop/laptop only (no mobile)
- Grant camera and microphone permissions
- Disable browser extensions that may interfere
- Stable internet connection (5+ Mbps recommended)

---

## Pilot Program Testing

Before full launch, follow this testing approach:

### Phase 1: Internal Testing

| Task | Description |
| :--- | :--- |
| Run simulations | 3-5 complete test runs |
| Team testing | Have colleagues take the interview |
| Technical check | Verify all question types work |
| Timing check | Confirm duration is appropriate |

### Phase 2: Small Group Pilot

| Task | Description |
| :--- | :--- |
| Select pilot group | 5-10 real candidates |
| Monitor closely | Watch for technical issues |
| Gather feedback | Ask about their experience |
| Review results | Check score distribution |

### Phase 3: Review and Adjust

| Area | What to Check |
| :--- | :--- |
| Completion rate | Are candidates finishing? |
| Score distribution | Is it reasonable? |
| Candidate feedback | Any common complaints? |
| Technical issues | Any recurring problems? |

### Phase 4: Full Launch

- Roll out to all candidates
- Continue monitoring completion rates
- Iterate based on ongoing feedback

---

## Restrictive Permissions

### Permission Guidelines by Role

| Role | Scenario | Access Level |
| :--- | :--- | :--- |
| New recruiter | Learning the platform | Tenant User |
| Experienced recruiter | Day-to-day operations | Tenant User |
| Hiring manager | Designs interviews | Tenant Admin |
| HR admin | Billing and settings | Tenant Admin |
| External agency | Limited jobs only | Tenant User + Job-specific |

### Job-Level Access Control

In addition to tenant-level roles, you can restrict access to specific jobs:

1. Go to the job's **Team Access** page
2. Add team members who should access this job
3. Users not on the list cannot view the job

### When to Use Job-Level Restrictions

| Scenario | Use Restriction? |
| :--- | :--- |
| Confidential executive search | Yes |
| Department-specific hiring | Yes |
| General open positions | No |
| External agency involvement | Yes |

### Audit Trail

All actions are logged for compliance:

- Who made changes and when
- Candidate data access
- Interview plan modifications
- Status changes

---

## General FAQ

### Account & Access

??? question "I forgot my password."
    Use "Sign in with Email Code" - no password needed. Enter your email and you'll receive a 6-digit verification code.

??? question "Can I have multiple accounts?"
    No. One email = one account. If you need access to multiple tenants, contact your administrator.

??? question "How do I change my role?"
    Contact a Tenant Admin in your organization. Only admins can modify user roles.

### Jobs & Interviews

??? question "Can I change the interview plan after candidates started?"
    Yes, but changes only affect NEW candidates. Candidates who have already started will complete the original interview plan.

??? question "How long can an interview be?"
    Maximum 60 minutes. We recommend keeping interviews under 45 minutes for optimal candidate engagement.

??? question "What happens if a candidate loses connection?"
    Candidates can rejoin using the same link. Their progress is saved automatically.

### Troubleshooting

| Problem | Quick Fix |
| :--- | :--- |
| Page not loading | Refresh, clear cache |
| Can't log in | Try email code option |
| Email not received | Check spam, verify address |
| Video not working | Check browser permissions |
| Export not downloading | Try different browser |

---

## Support

For additional assistance:

- **Email:** [support@recruit41.com](mailto:support@recruit41.com)
- **In-app:** Click the help icon (bottom right)
