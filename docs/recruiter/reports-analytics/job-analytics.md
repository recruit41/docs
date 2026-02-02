# Job Analytics

Analyze candidate flow, score distribution, and interview activity for each job.

---

## Overview

View detailed analytics for each job opening to understand your hiring funnel.

![Job Analytics](../../assets/images/recruiter/job-analytics.png)

*The Job Analytics page showing Application Flow, Peak Interview Days, Peak Interview Hours, and Score Distribution.*

### Summary Cards

| Card | What It Shows |
| :--- | :--- |
| **Total Candidates** | Number of applications received |
| **Completion Rate** | Percentage who finished the interview |
| **Average Score** | Mean AI rating across all candidates |
| **Top Performers** | Candidates scoring 4+ out of 5 |

---

## Sankey Diagram

The Sankey diagram visualizes candidate flow through your pipeline, showing where candidates drop off and conversion rates between stages.

### Reading the Diagram

| Element | Meaning |
| :--- | :--- |
| **Thick flows** | More candidates took this path |
| **Thin flows** | Fewer candidates |
| **Red/Orange** | Drop-off points |
| **Green** | Successful completions |

### Flow Stages

1. **Start** - Total candidates invited
2. **First node** - Candidates who opened the link
3. **Middle nodes** - Progress through interview stages
4. **End nodes** - Completed, abandoned, or expired

!!! tip "Identifying Issues"
    If you see a large drop-off at a specific stage, investigate why. Common causes include:

    - Interview too long
    - Technical difficulties
    - Poor candidate experience
    - Unclear instructions

---

## Score Distribution

Understand how candidates are performing across your interviews.

### Distribution Chart

The histogram shows the spread of candidate scores:

- **X-axis**: Score ranges (1.0-1.9, 2.0-2.9, etc.)
- **Y-axis**: Number of candidates in each range
- **Bell curve**: Indicates typical distribution

### Percentile Rankings

| Percentile | Meaning |
| :--- | :--- |
| **Top 10%** | Exceptional candidates |
| **Top 25%** | Strong performers |
| **Top 50%** | Above average |
| **Bottom 50%** | Below average |

### What the Distribution Tells You

| Pattern | Interpretation |
| :--- | :--- |
| **Right-skewed** | Most candidates scoring high - criteria may be too easy |
| **Left-skewed** | Most candidates scoring low - criteria may be too hard |
| **Normal curve** | Healthy distribution - criteria well calibrated |
| **Bimodal** | Two distinct groups - may indicate sourcing variation |

---

## Peak Activity Tracking

The activity heatmap shows when candidates take interviews by day of week and hour of day.

### Heatmap Components

- **Rows**: Days of the week (Monday - Sunday)
- **Columns**: Hours of the day (12am - 11pm)
- **Color intensity**: Number of interviews during that time slot

### How to Use This Data

| Goal | Action |
| :--- | :--- |
| **Optimize reminder timing** | Send reminders 1-2 hours before peak activity |
| **Set better deadlines** | Align deadlines with high-activity periods |
| **Plan review sessions** | Schedule reviews when new completions are likely |
| **Identify patterns** | Note if weekends or evenings are popular |

---

## Using Analytics Effectively

### Best Practices

1. **Monitor funnel drop-off** - If many candidates drop out at a specific stage, investigate why
2. **Track score trends** - Consistently low scores may indicate sourcing issues
3. **Optimize timing** - Schedule reviews during your peak activity periods
4. **Plan capacity** - Use completion data to forecast review workload
5. **Compare jobs** - Look for patterns across similar roles

### Common Questions

??? question "Why is my completion rate low?"
    Common causes:

    - Interview too long (keep under 45 minutes)
    - Technical issues (check browser requirements in communications)
    - Candidates abandoning (send reminders)
    - Link expiration (extend deadlines if needed)

??? question "Why are scores clustered at one end?"
    Check your evaluation criteria:

    - Too easy: Most candidates score 4+
    - Too hard: Most candidates score below 3
    - Adjust criteria or question difficulty accordingly

??? question "When do most candidates interview?"
    Check the Peak Activity heatmap. Most candidates complete interviews:

    - Evenings (6-9 PM) on weekdays
    - Weekend mornings
    - Lunch hours (12-1 PM)
