# AI-assisted documentation review and release monitoring

This personal pilot explores how AI and repository automation can help technical writers review documentation changes and identify release-related documentation work. It covers three related workflows: a documentation reviewer, a minor-release watcher, and a major-release watcher.

!!! note "Project status"
    Treat this as a personal pilot that is being configured and validated. Describe contributions as adapting, implementing, testing, or extending the supplied workflows. Claim integrations such as automated issue creation, GitHub Actions deployment, or Slack notifications only after they have been demonstrated in a test repository.

## Problem

Documentation updates can be missed when product changes move through pull requests and release work happens across multiple teams. Manual review also makes it harder to apply writing rules consistently and to trace a documentation gap back to its source change.

## Workflow areas

| Workflow | What it supports |
| --- | --- |
| Documentation reviewer | Reviews Markdown or MDX changes against defined editorial guidance and returns findings with severity levels. |
| Minor-release watcher | Reviews relevant changes for a minor release and prepares traceable documentation follow-up. |
| Major-release watcher | Examines release scope, dependencies, exceptions, and documentation coverage. Its completeness result is a heuristic that requires human verification. |
| Combined workflow | Connects review and release monitoring with validation, failure handling, human review, and usage tracking. |

## Skills this project is designed to demonstrate

| Area | Skills |
| --- | --- |
| Documentation reviewer | Docs-as-code, GitHub Actions workflow configuration, style governance, prompt design, severity-based quality checks, JSON and Markdown processing. |
| Minor-release watcher | Documentation impact analysis, GitHub CLI and API use, Bash and `jq` scripting, release documentation planning, and duplicate detection. |
| Major-release watcher | Release scope analysis, dependency tracking, exception handling, completeness criteria, requirements validation, and false-positive analysis. |
| Combined implementation | Workflow design, acceptance criteria, failure handling, human review, JSON Schema validation, and model usage and cost monitoring. |

## Technology areas

- GitHub Actions and pull request workflows
- GitHub CLI and API
- Bash and `jq`
- Markdown and MDX
- JSON and JSON Schema
- AI-assisted content review and prompt design
- Python standard-library utilities for review-context processing

## Review and validation principles

- Treat generated findings as candidates for review, not as approval or proof that content is complete.
- Keep technical accuracy and final editorial decisions with people.
- Validate outputs and source evidence before creating documentation work items.
- Test failure paths, including missing model verdicts and unsuccessful source retrieval.
- Measure a baseline before reporting review-time savings, precision, missed gaps, reliability, or cost per accepted task.

## Portfolio evidence

As implementation progresses, useful evidence includes an annotated architecture and runbook, a test matrix, sample before-and-after reviews, a trace from a source pull request to a confirmed documentation gap, and measured pilot results. Do not report business impact or percentage improvements until they have been measured.

[Projects overview](../index.md){ .cta .secondary }
