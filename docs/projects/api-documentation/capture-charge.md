# Capture a charge

This self-authored example demonstrates a delayed-capture payment flow with fictional API data. It is not tied to a specific payment provider.

## Capture an authorized charge

Capture a charge after a successful authorization when the original charge was created with delayed capture.

`POST /v1/charges/{chargeId}/capture`

### Path parameter

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `chargeId` | string | Yes | Unique identifier of an authorized charge. |

### Request body

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | integer | No | Amount to capture in the smallest currency unit. Omit it to capture the remaining authorized amount. |
| `reference` | string | No | Merchant-defined reference for reconciliation. |

### Request

```bash
curl -X POST https://api.example.com/v1/charges/chg_1042/capture \
  -H "Authorization: Bearer test_access_token" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: capture-order-1042" \
  -d '{
    "amount": 2500,
    "reference": "shipment_1042"
  }'
```

### Response

A successful capture returns `200 OK`.

```json
{
  "id": "chg_1042",
  "amount": 2500,
  "currency": "USD",
  "status": "captured",
  "capturedAmount": 2500,
  "reference": "shipment_1042",
  "capturedAt": "2026-10-02T10:45:00Z"
}
```

## Validate the charge state

Capture only a charge that is in an authorized state. An API can reject a capture when the authorization has expired, the charge was already captured, or the requested capture amount exceeds the available authorized amount.

## Handle common responses

| HTTP status | Error code | Description | Developer action |
| --- | --- | --- | --- |
| `400` | `invalid_capture_amount` | The requested amount is invalid. | Verify the authorized and previously captured amounts. |
| `401` | `authentication_failed` | Authentication failed. | Verify the access token. |
| `404` | `charge_not_found` | The specified charge does not exist. | Verify the charge ID. |
| `409` | `invalid_charge_state` | The charge cannot be captured in its current state. | Retrieve the charge and review its status. |
| `422` | `authorization_expired` | The authorization is no longer valid. | Create a new authorization before attempting capture. |

See [Create a charge](create-charge.md) for the authorization request and [Error codes](error-codes.md) for the complete error format.
