# Documentation automation

## Objective

Design a repeatable documentation workflow that reduces manual handoffs without removing editorial ownership. The workflow accepts product inputs, organizes source material, supports drafting, runs quality checks, routes content for review, and publishes approved changes.

## Audience

- Technical writers managing release-driven content
- Product and engineering teams supplying source information
- Reviewers responsible for technical accuracy
- Documentation leads responsible for quality and publishing

## Components

| Component | Responsibility |
| --- | --- |
| Documentation intake | Collect Jira stories, PRDs, source pages, pull requests, and API specifications |
| Knowledge service | Index approved source material and metadata for retrieval |
| Content development | Create user guides, API content, release notes, and tutorials |
| Asset management | Maintain screenshots, diagrams, videos, and other supporting assets |
| Documentation QA | Check style, spelling, terminology, accessibility, formatting, and links |
| Review | Route content to engineering, product, writing, and other required reviewers |
| Publishing | Merge approved changes and publish to the documentation site |

## Design principle

Automation should make routine checks predictable. Writers and subject-matter experts remain responsible for meaning, accuracy, context, and final approval.

[View architecture](architecture.md){ .cta .primary } [View workflow](workflow.md){ .cta .secondary }
