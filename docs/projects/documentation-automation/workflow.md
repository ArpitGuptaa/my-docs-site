# Documentation automation workflow

## End-to-end flow

```mermaid
flowchart TD
    A[Identify documentation change] --> B[Collect approved source material]
    B --> C[Define audience and task]
    C --> D[Draft or update content]
    D --> E[Run style and terminology checks]
    E --> F[Validate links and build]
    F --> G[Technical review]
    G --> H{Changes required?}
    H -- Yes --> D
    H -- No --> I[Editorial review]
    I --> J[Merge approved change]
    J --> K[Publish]
    K --> L[Verify published output]
```

## Quality gates

A change should not publish merely because it builds. The workflow checks four different concerns:

1. **Technical accuracy** — examples, behavior, prerequisites, and product details are verified.
2. **Editorial quality** — terminology, voice, headings, procedures, and accessibility are reviewed.
3. **Repository quality** — links, Markdown, and the MkDocs build pass automated checks.
4. **Published output** — navigation, formatting, assets, and links are checked after deployment.
