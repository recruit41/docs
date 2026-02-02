# Security & Pre-Meeting Checks

Configure proctoring and security settings to ensure interview integrity.

---

## Security Checklist

Use this checklist to ensure your interviews are secure:

- [ ] Proctoring enabled for high-stakes roles
- [ ] Camera required for all video interviews
- [ ] Pre-meeting checks enabled
- [ ] Browser restrictions communicated to candidates
- [ ] Session timeouts configured

---

## Pre-Meeting Checks Configuration

These checks run before the candidate enters the interview.

| Check | What It Verifies | Recommended |
| :--- | :--- | :--- |
| **Browser** | Using supported browser | Always on |
| **Camera** | Camera is working | Always on |
| **Microphone** | Mic is working and clear | Always on |
| **Network** | Stable internet connection | Always on |
| **Screen Share** | Can share entire screen | For coding roles |

### Enabling Pre-Meeting Checks

1. Go to job's **Interview Design**
2. Navigate to **Settings** tab
3. Enable desired pre-meeting checks
4. Save changes

---

## Proctoring Settings

### Live Meeting Checks

| Setting | Default | Description |
| :--- | :--- | :--- |
| **Require Camera** | ON | Candidates must keep camera on |
| **Require Screen Share** | OFF | Candidates must share entire screen |
| **External Monitor Detection** | OFF | Flag if candidate connects extra display |

### Proctoring by Role Type

| Role Type | Recommended Settings |
| :--- | :--- |
| Entry-level | Camera only |
| Mid-level | Camera + Pre-meeting checks |
| Senior/Leadership | Camera + Screen share + Monitor detection |
| High-security/Compliance | All options enabled |

---

## Browser Requirements

Communicate these requirements to candidates:

### Supported Browsers

- **Google Chrome** (recommended)
- Microsoft Edge (Chromium)
- Mozilla Firefox
- Safari (macOS only)

### Not Supported

- Internet Explorer
- Mobile browsers
- Chromium-based alternatives (Brave, Opera, etc.)

### System Requirements

- Desktop or laptop computer
- Webcam with minimum 720p resolution
- Microphone (built-in or external)
- Stable internet connection (5+ Mbps recommended)

---

## Handling Security Flags

### Common Flags

| Flag | What It Means | Action |
| :--- | :--- | :--- |
| Camera disabled | Candidate turned off camera | Review recording |
| Multiple monitors | Extra display detected | Check for suspicious activity |
| Tab switching | Candidate left interview tab | Review context |
| Screen share stopped | Sharing was interrupted | Check if accidental |

### Reviewing Flagged Interviews

1. Go to candidate profile
2. Look for flag indicators
3. Review the video at flagged moments
4. Make note of findings
5. Consider context before deciding

---

## Session Security

### Timeout Settings

- **Idle timeout**: Session expires after inactivity
- **Maximum duration**: Hard limit on interview length
- **Reconnection window**: Time allowed to rejoin if disconnected

### Data Protection

All interview data is:

- Encrypted in transit (TLS 1.3)
- Encrypted at rest (AES-256)
- Stored in SOC2-compliant infrastructure
- Retained according to your data retention policy

---

## Communicating Requirements

### Include in Invitation Emails

```
Before your interview:
- Use Google Chrome browser
- Test your camera and microphone
- Find a quiet, well-lit location
- Ensure stable internet connection
- Have ID ready if requested
```

### Link to Candidate Guide

Always include a link to the [Candidate Guide](../../candidate/index.md) in your communications.
