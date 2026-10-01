# Documentation quality

Documentation quality combines technical review, editorial judgment, visual inspection, and repeatable automated validation. I use the following checks as a practical definition of done.

## Run the quality stack

| Review or tool | Checks |
| --- | --- |
| Technical review | Product behavior, feature accuracy, prerequisites, examples, limitations, API behavior |
| Editorial review | Audience fit, structure, clarity, terminology, active voice, grammar, accessibility |
| Visual review | Images, diagrams, sensitive data, sizing, rendered syntax, layout |
| Vale | Style, terminology, and configured editorial rules |
| CSpell | Spelling and approved vocabulary |
| markdownlint | Markdown source consistency |
| Link checker | Internal and external links |
| MkDocs strict build | Navigation, configuration, references, and build validity |

## Review content before publication

| Review parameter | Check |
| --- | --- |
| Audience and scope | Confirm that the page addresses the intended audience and task without unnecessary information. |
| Existing content | Check whether the feature is already documented and avoid duplicate or conflicting instructions. |
| Technical accuracy | Review feature behavior, prerequisites, procedures, examples, and expected results with the appropriate subject-matter expert. |
| Structure | Check whether parallel information works better as a table and whether architecture or workflow information benefits from a diagram. |
| Headings | Use direct, task-oriented headings, avoid unnecessary gerunds, and keep the hierarchy to three levels where practical. |
| Procedures | Use numbered steps for ordered tasks and check that no step is missing or duplicated. |
| Sentences | Use complete sentences, required articles, consistent punctuation, and shorter sentences when one sentence contains several ideas. |
| Abbreviations | Expand an abbreviation at first use and use the abbreviation consistently afterward. |
| Cross-references | Link new or changed content to the relevant related topics and remove references to deleted content. |
| Navigation | Update the table of contents or site navigation when a new page or section requires an entry. |

## Review images and links

| Review parameter | Check |
| --- | --- |
| Image relevance | Preview each image and confirm that it supports the user's task. |
| Image links | Verify that image references render and are not broken. |
| File names | Use meaningful file names that comply with the repository naming convention. |
| Image volume | Remove images that do not add information. |
| Image size | Check dimensions and rendered readability. |
| UI currency | Update affected screenshots when a feature changes shared navigation or other visible UI. |
| Sensitive data | Mask personal, customer, credential, and other sensitive information in images. |
| Hyperlinks | Verify internal and external links and confirm that each destination is relevant. |
| Link text | Use meaningful destination names instead of generic phrases such as “click here.” |

## Review APIs and code

| Review parameter | Check |
| --- | --- |
| API requests | Include a representative request sample when it helps developers use the operation. |
| API responses | Include representative success and error responses where appropriate. |
| Error codes | Define documented error codes and explain recovery when useful. |
| Sensitive values | Replace application IDs, client IDs, credentials, tokens, email addresses, and customer data with safe examples. |
| Example identities | Use fictional names and reserved domains such as `example.com`. |
| Rendered syntax | Check code blocks and public rendering, especially when a publishing system transforms source syntax. |

## Run automated checks

Before publication, confirm that the content passes the checks configured for the repository. These can include Vale, CSpell, Markdown validation, link checking, and a strict MkDocs build.

Automated checks support editorial review; they do not replace technical verification or human judgment.

## Complete the final review

A page is ready when:

- Technical claims and procedures have been reviewed.
- Required examples, diagrams, images, and links render correctly.
- The page contains no known duplicate, missing, obsolete, or sensitive content.
- Terminology and style are consistent.
- Automated checks pass.
- The rendered page has been reviewed in the target publishing environment.
