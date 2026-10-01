# API reference pattern

## Create a project

`POST /v1/projects`

Creates a project in the sample API.

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Display name for the project. |
| `region` | string | Yes | Region in which the project is created. |
| `description` | string | No | Short project description. |

### Request

```json
{
  "name": "documentation-demo",
  "region": "us-east",
  "description": "Example project for API documentation"
}
```

### Response

```json
{
  "id": "prj_1042",
  "name": "documentation-demo",
  "region": "us-east",
  "status": "active"
}
```

### Errors

| Status | Meaning | Action |
| --- | --- | --- |
| `400` | The request is invalid. | Check required fields and supported values. |
| `401` | Authentication failed. | Verify the access token. |
| `409` | A conflicting resource exists. | Review the existing resource before retrying. |

[Explore additional API samples](api-samples.md)
