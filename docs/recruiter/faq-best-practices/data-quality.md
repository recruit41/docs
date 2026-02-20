# How to Keep Your Candidate Data Clean

Maintain clean candidate data for better deliverability and accurate reporting.

---

## Why Data Quality Matters

| Practice | Why It Matters |
| :--- | :--- |
| **Verify emails before upload** | Prevents bounce-backs and failed invitations |
| **Use consistent naming** | Makes search and filtering easier |
| **Regular cleanup** | Archive stale applications to keep dashboard clean |
| **Standardize tags** | Enables meaningful filtering and reporting |

---

## Email Validation Tips

Before uploading a CSV (a spreadsheet file you can create in Excel or Google Sheets):

### Check for Common Issues

1. **Remove empty rows** - Delete any rows with empty email fields
2. **Fix typos** - Look for common mistakes:
   - `.con` instead of `.com`
   - `.gmal` instead of `.gmail`
   - Missing `@` symbol
   - Extra spaces
3. **Remove duplicates** - Same email should only appear once
4. **Verify format** - Must contain `@` and valid domain

### Validation Checklist

- [ ] All emails have `@` symbol
- [ ] All emails have valid domain (.com, .org, etc.)
- [ ] No duplicate email addresses
- [ ] No empty rows in the CSV
- [ ] No special characters (except allowed: . _ - +)

---

## Maintaining Clean Data

### Weekly Tasks

- Review and archive abandoned candidates
- Check for bounced emails and update addresses
- Follow up on "No Show" candidates

### Monthly Tasks

- Clean up inactive job postings
- Review and merge duplicate candidates
- Archive positions that have been filled

### Quarterly Tasks

- Audit team member access and remove inactive users
- Review tag usage and consolidate similar tags
- Export and backup important data

---

## Naming Conventions

Use consistent naming for easier organization:

### Job Titles

```
[Department] - [Role] - [Level] - [Location]
```

Examples:
- Engineering - Software Engineer - Senior - Remote
- Sales - Account Executive - Mid - New York
- Marketing - Content Writer - Entry - London

### Tags

Use a consistent format:

| Category | Format | Examples |
| :--- | :--- | :--- |
| Source | `source:xxx` | `source:referral`, `source:linkedin` |
| Stage | `stage:xxx` | `stage:shortlisted`, `stage:final-round` |
| Priority | `priority:xxx` | `priority:high`, `priority:low` |

---

## Handling Duplicates

### Identifying Duplicates

Signs of duplicate candidates:

- Same email in multiple applications
- Same name with different emails
- Similar resume content

### Merging Duplicates

1. Identify the primary record (most complete)
2. Note important information from duplicate
3. Archive or delete the duplicate
4. Add notes explaining the merge

---

## Data Export and Backup

### Regular Exports

Export data periodically for backup:

1. Go to Applications page
2. Select all candidates
3. Click Export → CSV
4. Store securely

### What to Export

- Candidate information
- Interview scores
- Notes and feedback
- Status history
