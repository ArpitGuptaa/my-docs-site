# Documentation CI/CD architecture

```mermaid
flowchart LR
    A[Writer] --> B[Git branch]
    B --> C[Pull request]
    C --> D[Vale]
    C --> E[CSpell]
    C --> F[markdownlint]
    C --> G[Lychee]
    D --> H[MkDocs strict build]
    E --> H
    F --> H
    G --> H
    H --> I[Review]
    I --> J[Merge]
    J --> K[GitHub Pages]
```

## Why separate checks?

Each tool answers a different question. Vale checks editorial rules, CSpell checks spelling, markdownlint checks source consistency, Lychee checks links, and MkDocs validates whether the site can build from its configuration and content.

The checks are most useful when their configuration is maintained with the documentation rather than treated as a one-time setup.
