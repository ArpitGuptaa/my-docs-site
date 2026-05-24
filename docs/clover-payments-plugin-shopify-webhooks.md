---
title: "Compliance webhooks for Clover payments plugin"
slug: "clover-payments-plugin-shopify-webhooks"
excerpt: ""
hidden: true
metadata:
  description: "Learn about Shopify mandatory compliance webhooks and the actions that Clover needs to take when a merchant requests for customer data or deletion of customer data, or uninstalls the Clover payments plugin for a Shopify Online Shop."
  image: []
  robots: "index"
createdAt: "Wed May 29 2024 05:35:33 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Aug 19 2024 05:37:12 GMT+0000 (Coordinated Universal Time)"
---


# Compliance webhooks for Clover payments plugin
Privacy laws, such as the General Data Protection Regulation (GDPR), impose requirements on entities that handle personal data. These regulations apply to parties that collect, store, or process personal information about individuals and are required when working with merchants in Europe.

Shopify requires mandatory compliance webhooks or callback methods that help manage the personal data collected by an app.

# Types of compliance webhooks

The Clover Payments plugin needs to support the three types of webhooks from Shopify:

| Merchant request | Shopify webhook | Description | Clover action |
|---|---|---|---|
| Request to access stored customer data. | `customers/data_request` | Customers for a merchant with a Shopify Online Shop can request to view customer data stored on Clover. The merchant must have an authorized or owner role to generate this request from the Shopify Dashboard. | 1. Send `200` response to Shopify.  <br>2. Send an acknowledgment email to the merchant with a link to the [Fiserv form](#fiserv-form-field-descriptions) requesting customer information.  <br>3. Send an email to the merchant to confirm or reject the request based on information in the Fiserv form. |
| Request to delete customer data with Clover. | `customers/redact` | Merchants with a Shopify Online Shop can request that customer data be deleted from the Shopify platform. The merchant must have an authorized or owner role to generate this request from the Shopify Dashboard.  <br><br>**Note:** If the customer is associated with multiple merchantIds, only the customer for the merchantId associated with the Shopify Online Shop is deleted. | 1. Send `200` response to Shopify.  <br>2. Send an acknowledgment email to the merchant with a link to the Fiserv form requesting customer information.  <br>3. Send an email to the merchant to confirm or reject the request based on information in the Fiserv form. |
| Request to delete Shopify Online Shop data from the Clover payment method. | `shop/redact` | Merchants with a Shopify Online Shop can request to:  <br><br>- deactivate the payment method or uninstall the app  <br>- change the payment provider | 1. Send `200` response to Shopify.  <br>2. Terminate the OAuth flow between the Clover Merchant and the Shopify Online Shop.  <br>3. Send an email to the merchant to confirm or reject the request. |

---

# Clover - Shopify webhook process

1. Merchant requests one of the following on the Shopify Online Shop Dashboard:
   - customer data
   - customer data deletion request
   - store deactivation request

2. Shopify invokes the related webhook:
   - `customers/data_request`
   - `customers/redact`
   - `shop/redact`

3. Clover sends `200` response to acknowledge the request in the webhook from Shopify.

4. Clover sends an email to the Clover merchant owner with the link to a Fiserv form that the merchant needs to complete.

5. Clover reviews the information in the form and decides on the next action.

6. Clover sends an email to the listed merchant owner's account to confirm or reject the customer's request.

7. Clover maintains the records of the requests and required emails.