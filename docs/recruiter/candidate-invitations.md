# Candidate Invitation Flow

This guide explains how to invite candidates to interviews using the Recruit41 ATS system's bulk invitation feature. You can efficiently invite multiple candidates by uploading a CSV file with their information.

## Step-by-Step Process

### 1. Prepare Your CSV File

Your CSV file must contain this required column:
- `email` - Valid email address

Optional columns:
- `first_name` - Candidate's first name  
- `last_name` - Candidate's last name

**Example CSV format:**
```csv
email,first_name,last_name
john.doe@example.com,John,Doe
jane.smith@example.com,Jane,Smith
alex.johnson@example.com,Alex,Johnson
```

### 2. Access the Invitation Manager

1. Go to **Applications** in your ATS dashboard
2. Click on the **"Invite Candidates"** button on the right side (or in the center of the screen if inviting candidates for the first time)
3. A page/form will open for the invitation manager

![Invite Candidates Button](../assets/images/invite-candidate.png)

*Click the "Invite Candidates" button to access the invitation manager*

### 3. Upload Your CSV File

![CSV Upload Interface](../assets/images/upload-csv.png)

You can upload your CSV file by:

- **Drag & Drop**: Drag your CSV file directly into the upload area
- **File Selection**: Click "Select File" to browse and choose your file

### 4. Data Validation & Processing

The system automatically validates your data:

- **Email Validation**: Checks for valid email format
- **Duplicate Detection**: Identifies duplicate email addresses  
- **Data Completeness**: Verifies required fields are present

![Validation Warning Example](../assets/images/warning.png)

### 5. Configure & Download

1. **Preview**: Review candidate list and validation status
2. **Set Time Windows (Optional)**: Click the "Set Time Window for Invitations" checkbox to configure when interviews become available to candidates and when invitation links expire. Leave unchecked for immediate activation with default expiration.
    - **Start After**: Sets when candidates can begin accessing their interview links
    - **End Before**: Sets when invitation links expire and become inaccessible

    ![Set Time Windows](../assets/images/set-time-windows.png)


3. **Process**: Click "Upload Candidate" to generate links
4. **Download**: Get CSV file with candidate application links for email distribution

---

## Best Practices

### Recommended Workflow

1. **Data Collection & Cleaning**: Gather candidate information and remove duplicates
2. **CSV Preparation**: Format data with required columns (email, first_name, last_name)
3. **Test Upload**: Try with a small batch first (5-10 candidates)
4. **Full Upload**: Process complete candidate list
5. **Follow-up**: Download results and send invitations via your email system

### Large Uploads

- **Batch Processing**: Split into 100-500 candidate batches
- **Data Management**: Keep master spreadsheets and track invitation status
- **Security**: Only upload necessary information and ensure data compliance

### CSV Template
```csv
email,first_name,last_name
john.doe@company.com,John,Doe
jane.smith@company.com,Jane,Smith
```

---

## Troubleshooting Guide

??? question "Invalid CSV format error"
    **Solution**: Save file as CSV, not Excel (.xlsx). Ensure comma-separated values with proper headers.

??? question "Email column not found"
    **Solution**: Rename your email column to exactly `email` (lowercase) in the first row.

??? question "Invalid email format errors"
    **Common Issues**: Missing @ symbol, spaces, invalid domains (.con vs .com), special characters
    **Solution**: Review and correct flagged email addresses or remove invalid entries.

??? question "Duplicate email detected"
    **Meaning**: Same email appears multiple times. System processes only the first occurrence.
    **Solution**: Remove duplicates before uploading.

??? question "Missing required fields"
    **Solution**: Check for empty cells in email, first_name, or last_name columns. Fill missing data or remove incomplete rows.

??? question "Upload/processing failures"
    **Solutions**: 

    - Check internet connection
    - Split large files into smaller batches (100-500 candidates)
    - Close file in Excel/Sheets before uploading
    - Try different browser or refresh page
    - Test with smaller file first (5-10 candidates)

---

## Support and Additional Resources

For additional assistance with candidate invitations:

- **Live Support**: Contact our support team during business hours
- **Email Support**: [support@recruit41.com](mailto:support@recruit41.com)
- **Documentation**: Refer to other sections of this guide for related topics

**Related Documentation:**

- [Email Templates](email-templates.md) - Customize your invitation communications
- [Candidate Management](index.md) - General recruiter guide and platform overview