# Create a charge

This self-authored example demonstrates how I document a payment API endpoint. The API, host name, credentials, identifiers, and payloads are fictional and are not tied to a specific payment provider.

## Create a charge

Use this endpoint to create a payment charge. Set `capture` to `false` when the integration must authorize the amount first and capture it later.

`POST /v1/charges`

### Request headers

| Header | Required | Description |
| --- | --- | --- |
| `Authorization` | Yes | Bearer access token used to authenticate the request. |
| `Content-Type` | Yes | Set to `application/json`. |
| `Idempotency-Key` | Recommended | Unique value that helps prevent duplicate charges when a request is retried. |

### Request body

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | integer | Yes | Amount in the smallest currency unit. For example, `2500` represents 25.00 USD. |
| `currency` | string | Yes | Three-letter ISO currency code. |
| `sourceToken` | string | Yes | Payment token created by the tokenization flow. |
| `capture` | boolean | No | Indicates whether to capture the authorized amount immediately. Defaults to `true`. |
| `reference` | string | No | Merchant-defined reference for reconciliation. |

### Request

```bash
curl -X POST https://api.example.com/v1/charges \
  -H "Authorization: Bearer test_access_token" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: order-1042-attempt-1" \
  -d '{
    "amount": 2500,
    "currency": "USD",
    "sourceToken": "tok_demo_8421",
    "capture": false,
    "reference": "order_1042"
  }'
```

### Response

A successful authorization returns `201 Created`.

```json
{
  "id": "chg_1042",
  "amount": 2500,
  "currency": "USD",
  "status": "authorized",
  "capturedAmount": 0,
  "reference": "order_1042",
  "createdAt": "2026-10-02T10:30:00Z"
}
```

Store the returned charge ID. You need it to retrieve, capture, refund, or reconcile the charge.

## Handle common responses

| HTTP status | Error code | Description | Developer action |
| --- | --- | --- | --- |
| `400` | `invalid_request` | One or more request fields are invalid. | Correct the request and submit it again. |
| `401` | `authentication_failed` | The access token is missing or invalid. | Verify the credential and authorization header. |
| `402` | `payment_declined` | The payment could not be authorized. | Ask the customer to use another payment method. |
| `409` | `idempotency_conflict` | The idempotency key was reused with different request data. | Use the original request data or create a new key. |
| `429` | `rate_limit_exceeded` | The request rate exceeded the allowed limit. | Retry after the interval returned by the API. |

For the complete error model, see [Error codes](error-codes.md). To complete a delayed-capture flow, see [Capture a charge](capture-charge.md).
