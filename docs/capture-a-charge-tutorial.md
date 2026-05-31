---
title: "Capture a charge (API)"
slug: "capture-a-charge"
excerpt: ""
hidden: false
metadata: 
  description: "Use the capture a charge endpoint to retrieve details of an existing charge, previously created using the create a charge endpoint."
  image: []
  robots: "index"
createdAt: "Mon Jul 18 2022 23:18:36 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Dec 11 2023 16:33:27 GMT+0000 (Coordinated Universal Time)"
---

# Capture a Charge (API)

Use the Capture a charge endpoint to retrieve details of an existing charge, previously created using the Create a charge endpoint. To return a charge, use the charge identifier (chargeId) from the create a charge request. `ChargeId` also returns when a charge is first created or refunded.

## Path parameters

Path parameter to use when capturing a charge:

| Object     | Type   | Description                                         | Required |
| :--------- | :----- | :-------------------------------------------------- | :------- |
| `chargeId` | string | Universally unique identifier (UUID) of the charge. | Required |

## Body parameters

Body parameters to use when capturing a charge:

| Object            | Type   | Description |
|-------------------|--------|-------------|
| `amount`          | int64  | Charge amount in the smallest monetary unit of the merchant's currency. If you do not specify an amount, the total of the original charge is captured.<br><br>Format: Cents |
| `receipt_email`   | string | Email address to which the charge receipt is sent. This value overrides any previously-specified email address for the charge.<br><br>Note: Receipts are not sent in the sandbox environment. |
| `level2`          | object | Additional data for purchase card transactions (US only). |


### Request and response examples

Request and response samples when running Capture a charge:

**Request sample**

```
curl --request POST \
     --url' {{URL}}/v1/charges/chargeId/capture' \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer ab86a5e8-48f3-b3bd-8c45-d415e9867833' \
     --header 'Content-Type: application/json'
     --header 'x-forwarded-for: {client_ip}' \

```

**Response sample**

```

{
  "id": "1AB2CDEF3G4H",
  "amount": 10,
  "currency": "usd",
  "created": 1656626930000,
  "captured": false,
  "customer": "ABCDEF12G3H45",
  "ref_num": "218100500005",
  "auth_code": "OK0974",
  "order": "12A34BBCCDDEE",
  "outcome": {
    "network_status": "approved_by_network",
    "type": "authorized"
  },
  "paid": true,
  "status": "succeeded",
  "source": {
    "id": "clv_1ABCD23efghI45JklmN6o7p",
    "brand": "VISA",
    "first6": "123456",
    "last4": "1234"
  }
  }

```

## Response parameters

The following table describes the possible responses when running the capture a charge endpoint:

| Message           | Description | Variable       | Description                                                                                                                                                                                   |
| ----------------- | ----------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200`             | string      |                | Returns the charge object with any captured value set to `true`.                                                                                                                              |
| `400 Bad Request` | string      | `charge`       | Returns when a card-related error occurs. Indicates the unique ID of the failed charge.                                                                                                       |
| `400 Bad Request` | string      | `code`         | Returns additional information about the error that you can use to provide user-friendly handling of the issue.                                                                               |
| `400 Bad Request` | string      | `decline_code` | Returns when a card issuer declined the transaction. Includes the reason for the decline if specified by the card issuer.                                                                     |
| `400 Bad Request` | string      | `doc_url`      | Returns a link for more information about the reported error code.                                                                                                                            |
| `400 Bad Request` | string      | `message`      | Provides detailed information about the error code. For card-related errors, use this information to inform users.                                                                            |
| `400 Bad Request` | string      | `param`        | If the error is related to a specific parameter, this value lists the parameter. You can inform users of a particular issue in the entered card information.                                  |
| `400 Bad Request` | string      | `type`         | Returned error type:<br>- `api_connection_error`<br>- `api_error`<br>- `authentication_error`<br>- `card_error`<br>- `idempotency_error`<br>- `invalid_request_error`<br>- `rate_limit_error` |

