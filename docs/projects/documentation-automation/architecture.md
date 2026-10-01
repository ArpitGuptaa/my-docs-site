# Documentation automation architecture

The architecture separates source intake, content development, validation, review, and publishing so that each stage has a clear responsibility.

```mermaid
flowchart LR
    A[Product inputs] --> B[Documentation intake]
    B --> C[Knowledge service]
    C --> D[Content development]
    D --> E[Asset management]
    D --> F[Documentation QA]
    E --> F
    F --> G[Technical review]
    G --> H[Editorial review]
    H --> I[Git repository]
    I --> J[CI validation]
    J --> K[Documentation site]
```

## Integration points

| Connector | Use |
| --- | --- |
| Jira | Release stories, requirements, and acceptance criteria |
| Confluence | Product context and approved source information |
| GitHub | Pull requests, code examples, reviews, and version history |
| OpenAPI | Endpoint definitions and API source material |
| Figma | UI references and approved design context |
| SharePoint | Controlled enterprise source documents |
| Deployment pipeline | Build validation and publishing |

The architecture favors traceable sources and explicit review over automatic publication.
