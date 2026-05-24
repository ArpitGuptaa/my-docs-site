---
title: "Add Apple Pay button to the Clover iframe"
slug: "clover-iframe-features-apple-pay"
excerpt: ""
hidden: false
metadata:
  description: "Learn how to add the Apple Pay button to the Clover-hosted iframe."
  image: []
  robots: "index"
createdAt: "Tue May 28 2024 06:22:15 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Oct 23 2024 11:10:59 GMT+0000 (Coordinated Universal Time)"
---

<meta name="description" content="Learn how to add the Apple Pay button to the Clover-hosted iframe." />

> **North America — United States and Canada**

Your merchants can accept payments through Apple Pay® using the Clover iframe integrations on their ecommerce websites.

# Prerequisites

1. **Validate merchant ecommerce website domain** — Only Clover merchants with a validated ecommerce website domain and subdomain can use the Apple Pay button. For more information, see:

   - [How to verify your ecommerce website domain with Apple Pay](https://docs.clover.com/dev/docs/apple-pay-implementation-options#step-1-verify-your-ecommerce-website-domain-with-apple-pay)
   - [How to take payments with Apple Pay](https://www.clover.com/help/take-payments-apple-pay)

2. **Check supported browsers and devices** — Apple Pay services are available on:

   - Supported browsers (Safari version 17.5 or above)
   - Apple Pay (v3) supported devices

# Before you begin

Review and follow the guidelines, terms, and conditions:

- Follow the [Acceptable Use Guidelines for Apple Pay on the Web](https://developer.apple.com/apple-pay/acceptable-use-guidelines-for-websites) for Apple Pay assets and button designs.
- Agree to the [Apple Payments Inc. Terms & Conditions](https://www.apple.com/legal/applepayments/direct-payments) to use Apple Pay integrations.

# Add button for Apple Pay transactions

1. On the [Clover iframe](https://docs.clover.com/dev/docs/clover-iframe-features), use the `paymentRequestButton` element to add a button for Apple Pay transactions.

   > **Note:** When creating a new `paymentRequestButton`, the payment `amount` (in cents) is required.

2. Use specific size properties for the Apple Pay payment button:

   - `display: inline-block;`
   - `background-size: 100% 60%;`
   - `background-repeat: no-repeat;`
   - `background-position: 50% 50%;`
   - `border-radius: 5px;`
   - `padding: 0px;`
   - `box-sizing: border-box;`
   - Default width: `300px (min-width: 200px;)`
   - Default height: `40px (min-height: 32px;)(max-height: 64px;)`
   - Values for `max-width` and `max-height` are set by the width and height of the `<div>` container you use for mounting the `paymentRequestButton` (`<div id="payment-request-button"></div>`).

3. Use a wrapper for the custom view.

```javascript
// Sample payment amount
const applePayRequest = clover.createApplePaymentRequest({
  amount: 1290,
  countryCode: 'CA',
  currencyCode: 'USD'
});

// By default USD and US, amounts should be sent in cents.
// Example:

const applePayRequest = clover.createApplePaymentRequest({
  amount: 1290
});

// Example response:
{
  "countryCode": "US",
  "currencyCode": "USD",
  "merchantCapabilities": ["supports3DS", "supportsEMV"],
  "supportedNetworks": ["visa", "masterCard", "amex", "discover"],
  "total": {
    "label": "Amount to be charged",
    "type": "final",
    "amount": "12.90"
  },
  "requiredShippingContactFields": ["email"],
  "requiredBillingContactFields": ["postalAddress", "name"]
}

// Create paymentRequestButton & mount to <div> container
const paymentRequestAppleButton = elements.create(
  'PAYMENT_REQUEST_BUTTON_APPLE_PAY',
  {
    applePaymentRequest: applePayRequest,
    sessionIdentifier: '{clover merchant uuid/clover app uuid}'
  }
);

/*
Note:
If merchants register their domains in the Merchant Dashboard,
they are required to pass merchant uuid.

If developers register their domains through the developer_app
settings on the Developer Dashboard, they are required to pass
developer_app uuid.
*/

paymentRequestAppleButton.mount('#{apple-div}');

// Note:
// #{apple-div} is an element ID where a button will be mounted

// Use the following method if you update the amount during the session:
clover.updateApplePaymentRequest({
  amount: 2400,
  countryCode: 'US',
  currencyCode: 'USD'
});

// Note:
// Pass the same country and currency codes that are used
// during the initial request creation.