# API reference pattern

## Create a charge

`POST /v1/charges`

Creates a charge against a valid payment source.

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | integer | Yes | Amount in the API's smallest supported currency unit. |
| `currency` | string | Yes | Three-letter currency code supported by the account. |
| `source` | string | Yes | Token or payment source identifier. |
| `description` | string | No | Short description for reconciliation or display. |

### Response guidance

A production reference should show a tested response example and document field semantics rather than only displaying raw JSON.

### Errors

Document errors next to the endpoint when developers need them to complete the task, and maintain a central error reference for reusable details.

[See the full self-authored API tutorial](../../clover-project/capture-a-charge-tutorial.md)
