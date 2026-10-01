# API documentation samples

These examples use fictional resources and identifiers. They demonstrate documentation patterns rather than a production API.

## Retrieve a project

`GET /v1/projects/{projectId}`

Returns one project.

```json
{
  "id": "prj_1042",
  "name": "documentation-demo",
  "status": "active",
  "region": "us-east"
}
```

## List projects

`GET /v1/projects?limit=20&cursor=next_1042`

Use `limit` to control the number of records returned. Use the returned cursor to request the next page.

```json
{
  "data": [
    {"id": "prj_1042", "name": "documentation-demo", "status": "active"},
    {"id": "prj_1043", "name": "api-sample", "status": "active"}
  ],
  "nextCursor": "next_1043"
}
```

## Update a project

`PATCH /v1/projects/{projectId}`

```json
{
  "description": "Updated example description"
}
```

A successful request returns the updated resource.

## Delete a project

`DELETE /v1/projects/{projectId}`

A successful request returns `204 No Content`.

## Handle errors

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The region value is not supported.",
    "requestId": "req_2048"
  }
}
```

Document the HTTP status, stable error code, readable message, and recovery action when the API provides them.

## Receive a webhook

A sample event can notify an integration when a project changes state.

```json
{
  "event": "project.updated",
  "id": "evt_3051",
  "createdAt": "2026-10-02T10:30:00Z",
  "data": {
    "projectId": "prj_1042",
    "status": "active"
  }
}
```

Webhook documentation should define event names, payload fields, authentication or signature validation, retry behavior, and duplicate-event handling.
