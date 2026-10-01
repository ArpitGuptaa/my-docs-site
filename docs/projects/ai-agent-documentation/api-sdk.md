# AgentFlow API & SDK

## API organization

A developer reference should group endpoints by the object developers work with rather than by internal service names.

| Resource | Example operations |
| --- | --- |
| Agents | Create, retrieve, update, delete, run |
| Tools | Register, list, configure, remove |
| Knowledge | Create source, index content, check status |
| Runs | Start run, retrieve run, cancel run, list events |
| Webhooks | Create subscription, rotate secret, delete subscription |

## Reference template

Each endpoint should document:

- Purpose and method
- Path and authentication
- Required permissions
- Path, query, and body parameters
- Request example
- Response schema and example
- Error conditions
- Idempotency or retry behavior when relevant

## SDK guidance

SDK documentation should complement the REST reference with installation, configuration, typed examples, pagination, retries, error handling, and version compatibility.
