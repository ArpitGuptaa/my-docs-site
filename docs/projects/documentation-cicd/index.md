# Documentation CI/CD

This project treats documentation quality as part of the repository workflow. A change is validated before it reaches the published site.

## Goals

- Catch broken links before publication.
- Enforce agreed editorial and terminology rules.
- Detect spelling and Markdown problems.
- Fail the build when navigation or configuration is invalid.
- Publish only after validation succeeds.

The repository uses the same principle for this portfolio: source content is version controlled, automated checks run in GitHub Actions, and MkDocs produces the published site.

[Architecture](architecture.md){ .cta .primary } [Workflow](workflow.md){ .cta .secondary }
