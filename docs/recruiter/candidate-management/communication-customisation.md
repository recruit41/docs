# Communication Customisation

Customize email templates and candidate communications for your hiring process.

---

## Communication Templates

Recruit41 provides pre-built templates for different stages of the candidate journey.

| Template | When to Use |
| :--- | :--- |
| **Invitation** | Initial interview invitation |
| **Reminder** | Nudge to complete interview |
| **Extension** | Grant more time |
| **Abandoned** | Re-engage dropped candidates |
| **Custom** | Write your own message |

---

## Customizing Templates

### Accessing Email Templates

1. Go to **Email Templates** in the job sidebar
2. Select the template you want to edit
3. Modify the subject line and body
4. Save your changes

### Using Placeholders

Use these placeholders for dynamic content:

| Placeholder | What It Inserts |
| :--- | :--- |
| `{{candidate_name}}` | Candidate's full name |
| `{{first_name}}` | Candidate's first name |
| `{{job_title}}` | Position name |
| `{{company_name}}` | Your company name |
| `{{deadline}}` | Interview deadline |
| `{{interview_link}}` | Unique interview URL |
| `{{duration}}` | Expected interview duration |

### Example Template

```
Subject: Your interview for {{job_title}} at {{company_name}}

Hi {{first_name}},

Thank you for your interest in the {{job_title}} position!

Please complete your interview by {{deadline}} using the link below:

{{interview_link}}

The interview will take approximately {{duration}}.

Best regards,
The {{company_name}} Team
```

---

## Email Best Practices

### Subject Lines

- Keep it clear and action-oriented
- Include the job title
- Avoid spam trigger words

**Good:** "Complete your Software Engineer interview - Action required"
**Bad:** "URGENT!!! Don't miss this opportunity!!!"

### Body Content

- Be concise and friendly
- Clearly state the action needed
- Include all necessary details
- Provide support contact information

### Timing

| Email Type | Best Time to Send |
| :--- | :--- |
| Initial invitation | Morning (9-10 AM) |
| Reminders | Early afternoon (1-2 PM) |
| Final reminder | Morning, 1 day before deadline |

---

## Template Library

For ready-to-use professional templates, see the [Email Templates Guide](../email-templates.md).

---

## Tracking Communications

### Delivery Status

Track the status of your emails:

| Status | Meaning |
| :--- | :--- |
| **Sent** | Email dispatched |
| **Delivered** | Email reached inbox |
| **Opened** | Candidate opened email |
| **Clicked** | Candidate clicked interview link |
| **Bounced** | Email could not be delivered |

### Troubleshooting Bounces

If emails are bouncing:

1. Verify the email address is correct
2. Check for typos in the domain
3. Ask the candidate for an alternative email
4. Check if their inbox is full
