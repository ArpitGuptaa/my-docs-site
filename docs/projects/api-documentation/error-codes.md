# Error codes

This page demonstrates an error model for a fictional payment API. Stable error codes help developers handle failures programmatically while readable messages explain the immediate problem.

## Error response

An unsuccessful request returns an HTTP status and an error object.

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The amount must be greater than zero.",
    "parameter": "amount",
    "requestId": "req_2048"
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `code` | string | Stable machine-readable error code. |
| `message` | string | Human-readable description of the problem. |
| `parameter` | string | Request field associated with the error, when applicable. |
| `requestId` | string | Identifier that can be used to trace the request. |

## HTTP status codes

| Status | Meaning | Recommended action |
| --- | --- | --- |
| `400 Bad Request` | The request is malformed or contains an unsupported value. | Correct the request before retrying. |
| `401 Unauthorized` | Authentication failed. | Verify the access token and authorization header. |
| `402 Payment Required` | The payment attempt was declined or could not be completed. | Review the error code and request another payment method when appropriate. |
| `404 Not Found` | The requested resource does not exist. | Verify the resource identifier. |
| `409 Conflict` | The request conflicts with the current resource state or idempotency record. | Retrieve the current resource and resolve the conflict. |
| `422 Unprocessable Content` | The request is valid JSON but cannot be processed in the current state. | Review the resource state and business rules. |
| `429 Too Many Requests` | The client exceeded a request limit. | Wait before retrying and follow the API retry guidance. |
| `500 Internal Server Error` | The service encountered an unexpected error. | Retry only when the operation is safe to repeat. |
| `503 Service Unavailable` | The service is temporarily unavailable. | Retry with backoff. |

## Application error codes

| Error code | Typical status | Description |
| --- | --- | --- |
| `invalid_request` | `400` | A required field is missing or invalid. |
| `authentication_failed` | `401` | The credential is missing, expired, or invalid. |
| `payment_declined` | `402` | The payment method was declined. |
| `charge_not_found` | `404` | The charge ID could not be found. |
| `idempotency_conflict` | `409` | An idempotency key was reused with different request data. |
| `invalid_charge_state` | `409` | The requested operation is not valid for the current charge state. |
| `authorization_expired` | `422` | The authorization expired before capture. |
| `rate_limit_exceeded` | `429` | The client exceeded its request limit. |
| `service_error` | `500` | An unexpected service error occurred. |

## Document retry behavior

Do not instruct developers to retry every failure. Validation and authentication errors normally require a request change. Temporary service failures can support retries with exponential backoff. For operations that can create duplicate financial actions, document idempotency requirements together with retry guidance.

See [Create a charge](create-charge.md) and [Capture a charge](capture-charge.md) for endpoint-level examples.
