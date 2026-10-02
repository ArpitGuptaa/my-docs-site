# API documentation

This project demonstrates how I structure developer documentation so that reference content and task-based guidance work together. All endpoints, host names, credentials, identifiers, and payment data in this section are fictional portfolio examples.

## Content model

- **Overview** — what the API does and who should use it.
- **Get started** — base URL, authentication, first request, and first response.
- **Concepts** — resource models, lifecycle, identifiers, pagination, tokenization, and idempotency.
- **Tutorials** — complete developer tasks and integration flows.
- **API reference** — endpoint-level contract details.
- **Errors** — status codes, error objects, causes, and recovery guidance.
- **Webhooks** — event catalog, signatures, retries, and testing.

## Payment API portfolio samples

These pages demonstrate API documentation skills through a neutral payment workflow. They show how I document endpoint purpose, prerequisites, HTTP methods, headers, parameters, request bodies, response bodies, resource states, idempotency, tokenization, errors, and developer recovery actions.

- [Create a charge](create-charge.md) — create or authorize a fictional payment charge.
- [Capture a charge](capture-charge.md) — document a delayed-capture workflow and charge-state validation.
- [Tokenization overview](tokenization-overview.md) — explain a client-to-server tokenization flow and sensitive-data boundaries.
- [Error codes](error-codes.md) — define HTTP statuses, stable application error codes, recovery actions, and retry guidance.
- [Additional API samples](api-samples.md) — demonstrate CRUD operations, pagination, errors, and webhooks.

[API reference pattern](api-reference.md){ .cta .primary } [Tutorial pattern](tutorials.md){ .cta .secondary }
