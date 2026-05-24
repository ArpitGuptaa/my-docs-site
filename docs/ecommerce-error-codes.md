---
title: "Ecommerce API: Error codes"
slug: "ecommerce-error-codes"
excerpt: ""
hidden: false
metadata:
  description: "The Ecommerce API returns error codes and messages when a request contains invalid or incomplete data and Clover cannot process the request. This page provides explanations of each error code and how you can prevent these errors."
  image:
    - "https://files.readme.io/025ed80-clover-symbol-green_2.png"
    - "clover-symbol-green (2).png"
    - 144
    - 144
    - "#228800"
  robots: "index"
createdAt: "Tue Jun 16 2020 21:34:23 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Dec 11 2023 16:33:28 GMT+0000 (Coordinated Universal Time)"
---
# Ecommerce API: Error codes

The Ecommerce API returns error codes and messages when a request contains invalid or incomplete data and Clover cannot process the request. These issues can be divided into two general categories:

- Errors that should be addressed by your app's logic (if you are integrating with the API only)
- Errors that should be handled at runtime (iframe and API integrations)

Errors you may encounter are explained in the following sections.

## API only errors

You can prevent these errors by checking for the described issues in your application before submitting the API request.

| Error code | Description | Request type(s) | Prevention |
| :--- | :--- | :--- | :--- |
| `incorrect_cvc` | The `card.cvv` provided is not a three- or four-digit value | Create token | Verify that the CVV value is a three- or four-digit number |
| `invalid_cvc` | The `card.cvv` provided is not a three- or four-digit value | Create token, create or update customer | Verify that the CVV value is a three- or four-digit number |
| `invalid_expiry_month` | The `card.exp_month` provided is not a one- or two-digit value | Create token | Verify that the month value is a one- or two-digit number |
| `invalid_expiry_year` | The `card.exp_month` provided is not a two- or four-digit value | Create token | Verify that the year value is a two- or four-digit number |
| `invalid_number` | The PAN provided in `card.number` is invalid | Create token | Verify that the PAN is valid |
| `invalid_tax_amount` | The `tax_amount` provided is not valid | Create charge | Verify that the amount is a positive number |

## API and iframe errors

These errors can be handled at runtime and may be encountered by any Ecommerce app.

| Error code | Description | Request type | Next steps |
| :--- | :--- | :--- | :--- |
| `amount_too_large` | The `amount` provided exceeds the amount allowed by Clover ($999,999.99) | Create charge and pay for order | If possible, split the charge or order into smaller amounts and retry as two transactions. If the customer's `source` token is single-use, the card will need to be tokenized again before attempting a second request when the first succeeds. |
| `card_declined` | The `source` provided was declined by the payment gateway | Create charge and pay for order | Allow the customer to enter a different card and retry the request with the new `source` |
| `card_on_file_missing` | The customer attempting to pay does not have a `source` on file to complete the payment | Charge | Direct the customer to enter their card information and update the customer's record with the new `source`. Then, retry the original charge request. |
| `charge_already_captured` | The `charge` provided has already been captured | Capture charge | Do not retry the request |
| `charge_already_refunded` | The `charge` provided has already been refunded | Refund | Do not retry the request |
| `email_invalid` | The `email` provided is not valid | Create charge, create or update customer, pay for order | Notify the customer of the issue and allow them to retry or enter a new email address |
| `expired_card` | The expiration date (the combination of `card.exp_month` and `card.exp_year`) provided is in the past | Token | Notify the customer of the issue and allow them to retry by entering a new card |
| `incorrect_cvc` | The `card.cvv` provided is not a three- or four-digit value | Token | Notify the customer of the issue and allow them to retry by entering a new card |
| `incorrect_number` | The value provided in `card.number` is not valid | Token | Notify the customer of the issue and allow them to retry by entering a new card |
| `invalid_card_type` | The `card.brand` provided is not a recognized value | Token | Before sending the request, verify that the `brand` is one of the enumerated values |
| `invalid_charge_amount` | The `amount` provided exceeds the amount allowed by Clover | Charge | If possible, split the charge or order into smaller amounts and retry as two transactions. If the customer's `source` token is single-use, the card will need to be tokenized again before attempting a second request when the first succeeds. |
| `invalid_request` | The value provided in `card.number` is not a valid raw or encrypted PAN | Token | Notify the customer of the issue and allow them to retry by entering a new card |
| `invalid_tip_amount` | The `tip_amount` provided is not a valid amount | Create charge and pay for order | Notify the customer of the issue and allow them to retry by entering a new tip amount |
| `invalid_tax_amount` | The `tax_amount` provided is not a valid amount | Create charge | Check that the amount is a positive number and, if the value has changed after the check, retry the request |
| `missing` | The token request failed upstream and the upstream message could not be processed | Token | Allow the user to retry the transaction |
| `order_already_paid` | The order identified by the ID in the request URL has already been paid | Pay order | Notify the user that the order has already been paid |
| `processing_error` | A generic error indicating that the request could not be processed as submitted | Any | Notify the user that an error occurred and, if warranted, allow them to retry the request |
| `rate_limit` | Your application has made too many requests and additional requests will not be processed until the rate limit expires | Any | Follow the best practices described in `API usage & rate limits` |
| `resource_missing` | The data item (charge, order, or refund) provided in the request does not exist | Any | Notify the user that the data item could not be found. Allow the user to adjust the request and retry. |
| `token_already_used` | The `source` value is not a multipay token and was already used for a different payment | Charge | Notify the user of the issue and have them reenter their card details. Then, use the iframe to generate a new token. |   
