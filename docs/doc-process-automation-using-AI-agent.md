# Documentation Automation with Agentic AI

## Business Problem

As software products become larger and more complex, technical writers spend a significant amount of time gathering information before documentation can begin. Information is often spread across Jira stories, product requirement documents (PRDs), Confluence pages, pull requests, API specifications, screenshots, diagrams, videos, and other supporting files.

Because these resources are stored in multiple systems, collecting them is a manual process. Documentation is frequently completed late in the release cycle, leaving customers, support teams, and internal stakeholders without current documentation when new features become available.

## Solution Overview

The platform streamlines documentation by coordinating information collection, content creation, quality validation, and publication through a structured workflow.

A supervisor coordinates a set of specialized services. Each service performs a specific task, such as collecting release information, preparing documentation drafts, validating content, or publishing approved documentation. The supervisor manages the sequence of activities and tracks progress throughout the workflow.

This modular approach keeps responsibilities separate, making the workflow easier to maintain, monitor, and extend.

![pipeline-overview](/docs/images/pipeline-overview.png)

## Architecture

Information moves from connected source systems into a shared knowledge repository. The supervisor coordinates each stage of the workflow, and the completed documentation is published through version control and the deployment pipeline.

## Benefits

- Documentation is prepared earlier because information is collected automatically as development work progresses.
- Supporting assets such as screenshots, diagrams, and videos are matched with the appropriate feature based on project metadata.
- Documentation follows consistent style, terminology, formatting, and quality standards before review begins.
- Security and accessibility checks identify sensitive information and compliance issues before publication.
- Reviewers can focus on technical accuracy and completeness instead of correcting formatting, grammar, or broken links.

## End-to-End Workflow

1. Standardize project information using consistent templates for Jira stories, PRDs, Confluence pages, API specifications, and release summaries.
2. Collect release information and supporting assets from approved repositories.
Prepare documentation drafts, including user guides, release notes, and API documentation.
3. Validate content for style, formatting, terminology, grammar, and broken links.
Check documentation for accessibility requirements and sensitive information.
4. Complete engineering, product management, and technical writing reviews.
Publish the approved documentation to the documentation website.

## Platform Architecture

This section describes how documentation moves from development systems to the published documentation site. It also explains how responsibilities are divided across the workflow and how the shared knowledge repository supports documentation generation.

### System Architecture

Project information from connected systems is collected into a shared knowledge repository. The supervisor coordinates six specialized services that process the information in sequence. Completed documentation is committed to the documentation repository, validated through the CI pipeline, and published automatically.

- **Source systems**: Jira, Confluence, PRDs, GitHub, OpenAPI specs, Figma, release notes.
- **Knowledge layer (RAG)**: indexes and embeds content from every connected source so agents can retrieve relevant, current context rather than relying on static prompts.
- **Supervisor agent**: owns the end-to-end sequence and hands off between sub-agents.
- **Sub-agents**: Content Agent, API Agent, Release Note Agent, Diagram Agent, QA Agent, and Publishing Agent.

![system-architecture](/docs/images/system-architecture.png)

Connected systems include:

- Jira
- Confluence
- Product requirement documents
- GitHub
- OpenAPI specifications
- Figma
- Release notes

The knowledge repository indexes information from each connected source, making current project information available throughout the documentation workflow.

The supervisor coordinates the workflow by assigning work to the appropriate service and monitoring completion.

### Agent Architecture

Instead of assigning every task to a single service, the platform separates the work into individual components. Each component performs one well-defined function with clearly defined inputs and outputs.

![agent-architecture](/docs/images/agent-architecture.png)

| Component | Responsibility |
|-----------|----------------|
| Documentation Intake | Collects Jira stories, PRDs, Confluence pages, GitHub pull requests, and API specifications. |
| Knowledge Service | Maintains indexes, metadata, embeddings, and semantic search capabilities. |
| Content Generation | Creates user guides, API documentation, release notes, and tutorials. |
| Asset Management | Collects screenshots, diagrams, videos, and GIFs used in documentation. |
| Documentation QA | Verifies style, spelling, terminology, accessibility, formatting, and links. |
| Review | Routes documentation for engineering, product, technical writing, and optional legal review. |
| Publishing | Publishes approved documentation to Git repositories, documentation websites, and developer portals. |

### Supervisor Workflow

The workflow begins when a release becomes available. The supervisor coordinates each activity from information collection through publication and records the status of every stage.

![supervisor-workflow](/docs/images/supervisor-workflow.png)

### Knowledge Architecture

Documentation is generated using information stored in a shared knowledge repository. Content is indexed, stored, and retrieved through a vector search process that provides relevant project information from connected systems.

![knowledge-architecture](/docs/images/knowledge-architecture.png)

### MCP Connectors

Each connector provides access to a specific business system.

| Connector           | Purpose                                               |
| ------------------- | ----------------------------------------------------- |
| Jira                | Retrieves work items                                  |
| Confluence          | Retrieves product documentation                       |
| GitHub              | Retrieves pull requests                               |
| OpenAPI             | Retrieves API specifications                          |
| Figma               | Retrieves interface assets                            |
| SharePoint          | Retrieves product documents                           |
| Deployment Pipeline | Retrieves deployment and release pipeline information |

![deployment-pipeline](/docs/images/deployment-pipeline.png)

Each environment performs the same validation checks for documentation quality, accessibility, and security before content progresses to the next stage.

## Documentation Automation Workflow

This workflow describes how documentation moves from completed development work to publication without requiring technical writers to manually collect information from multiple systems.

### Use Case

A release event occurs, such as a merged pull request, a completed Jira story, or a tagged release.
A user requests documentation generation from the supervisor.

**Example request**: Generate documentation for the July release.

Both methods follow the same workflow.

#### End-to-End Flow

![end-to-end-flow](/docs/images/end-to-end-flow.png)

Each stage is completed by the responsible component. The supervisor coordinates the workflow and waits for each stage to finish before continuing.

#### Example Workflow

The following example displays the sequence of operations when a user requests release documentation.

1. The user requests documentation for the July release.
2. The supervisor identifies the request as a release documentation task.
3. The content service retrieves information from:
    - Jira
    - Confluence
    - GitHub
    - OpenAPI specifications
    - Information from all sources is combined into a single working set.
4. A documentation draft is prepared.
5. The draft is validated for documentation quality.
6. After approval, the publishing service commits the documentation and publishes the update.

The same workflow is used for feature documentation and API documentation. Only the required source systems and output templates differ.

### Workflow Summary

The workflow connects every part of the platform. The architecture, knowledge repository, and supporting services work together to produce documentation from project information with minimal manual effort. Instead of collecting information from several independent systems, technical writers review and refine documentation that has already been assembled, validated, and prepared for publication.