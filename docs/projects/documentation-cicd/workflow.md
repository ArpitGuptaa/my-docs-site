# Documentation CI/CD workflow

## Pull-request checks

1. Check out the documentation repository.
2. Install the documentation toolchain.
3. Run editorial and spelling checks.
4. Validate Markdown source.
5. Check internal and external links.
6. Run `mkdocs build --strict`.
7. Block merge when a required check fails.

## Publishing checks

After merge, build the site from the same commit that passed validation. Publish the generated site and verify the deployed URL.

## Failure handling

A useful CI message should identify the file, line, rule, and recommended correction. Teams should fix the source problem instead of weakening a rule merely to make the pipeline green.

[See the detailed CI/CD work sample](../../doc-automation/implementation-of-ci-cd-pipeline-for-documentation.md)
