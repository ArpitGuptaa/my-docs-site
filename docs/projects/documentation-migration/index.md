# Documentation migration

This case study covers migration of legacy HTML/XML help into a modern Markdown-based documentation repository.

## Migration goals

- Preserve useful content and hierarchy.
- Convert custom markup into supported Markdown or components.
- Keep links and assets traceable.
- Detect unsupported tags before build time.
- Validate migrated output rather than assuming successful conversion means usable documentation.

## Typical risks

Legacy help often contains custom tags, relative links, embedded styling, duplicate pages, obsolete navigation, and markup that does not map directly to Markdown or MDX.

[Migration process](migration-process.md){ .cta .primary } [Validation](validation.md){ .cta .secondary }
