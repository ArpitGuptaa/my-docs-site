
---

## File: `docs/projects/documentation-migration/migration-process.md`

```markdown
# Documentation Migration Process

## Phase 1: Discovery

Create an inventory of the source documentation.

Capture information such as:

| Attribute | Example |
| --- | --- |
| Source file | `configure-service.xml` |
| Format | XML |
| Content type | Procedure |
| Product | Platform |
| Owner | Product team |
| Images | 3 |
| Internal links | 5 |
| Migration decision | Migrate |

## Phase 2: Content Assessment

Classify content as:

- Migrate as-is
- Migrate and edit
- Consolidate
- Rewrite
- Archive
- Remove

This step reduces unnecessary migration work.

## Phase 3: Target Information Architecture

Define where migrated content belongs in the new documentation system.

Example:

```text
docs/
├── get-started/
├── concepts/
├── guides/
├── reference/
├── troubleshooting/
└── release-notes/

Phase 4: Transformation Rules
Create explicit rules for common source elements.
Example:
<note>
Restart the service after updating the configuration.
</note>

could become:
!!! note

    Restart the service after updating the configuration.

Transformation rules should cover:
- Headings
- Paragraphs
- Lists
- Tables
- Code
- Notes
- Warnings
- Images
- Links
- Custom elements
- Metadata
Phase 5: Automated Conversion
A conversion script can process repeatable transformations.
Conceptual workflow:
Read source
    ↓
Parse structure
    ↓
Transform known elements
    ↓
Flag unsupported elements
    ↓
Generate Markdown
    ↓
Generate migration report

Automation should flag unsupported or ambiguous content rather than
silently discarding it.
Phase 6: Validation
Validate the generated documentation.
Structural validation
Check:
- Heading hierarchy
- Lists
- Tables
- Code blocks
- Admonitions
Link validation
Check:
- Internal links
- External links
- Anchors
- Image paths
Asset validation
Confirm that referenced images and downloadable files exist.
Build validation
Build the target documentation site and identify:
- Markdown errors
- MDX errors
- Unsupported components
- Navigation problems
Phase 7: Editorial Review
Technical writers review migrated content for:
- Accuracy
- Readability
- Structure
- Terminology
- Duplication
- User context
- Accessibility
Automated conversion does not replace editorial review.
Phase 8: Acceptance
Define measurable acceptance criteria.
For example:
- Required pages migrated
- No critical broken internal links
- Required assets available
- Target site builds successfully
- Required content reviewed
- Navigation verified
- Stakeholder approval completed
Phase 9: Publish
After validation and approval:
1. Merge migrated content.
2. Build the production site.
3. Publish documentation.
4. Monitor broken links and user feedback.
5. Resolve post-migration issues.
Migration Principle
Do not reproduce the weaknesses of the legacy documentation in the
new platform.
Migration should be treated as a content-design project, not merely a
format-conversion exercise.



---

# What your Projects hierarchy now contains

After adding this content, you should have:

```text
docs/projects/
│
├── index.md
│
├── documentation-automation/
│   ├── index.md             ✓
│   ├── workflow.md          ✓
│   ├── architecture.md      ✓
│   └── images/
│
├── ai-agent-documentation/
│   ├── index.md             ✓
│   ├── architecture.md      ✓
│   ├── api-sdk.md           ✓
│   └── images/
│
├── documentation-cicd/
│   ├── index.md             ✓
│   ├── workflow.md          ✓
│   └── images/
│
├── api-documentation/
│   ├── index.md             ✓
│   ├── api-reference.md     ✓
│   └── images/
│
└── documentation-migration/
    ├── index.md             ✓
    ├── migration-process.md ✓
    └── images/