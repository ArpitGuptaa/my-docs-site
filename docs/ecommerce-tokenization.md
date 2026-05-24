---
title: "Ecommerce - Card tokenization"
slug: "ecommerce-tokenization"
excerpt: ""
hidden: false
metadata:
  description: "Learn about Clover Ecommerce card tokenization."
  image: []
  robots: "index"
createdAt: "Tue Jul 23 2024 10:40:14 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Oct 21 2024 05:12:57 GMT+0000 (Coordinated Universal Time)"
---
# Ecommerce - Card tokenization

Card tokenization is a process to substitute sensitive data, such as credit card numbers or PAN, with a non-sensitive equivalent value known as a token.

A card token cannot be reverse-engineered by a third party to get the original sensitive data. By using a token in place of raw credit card data, you can minimize the risk of handling sensitive data in transit.

See [Ecommerce Tokenization](https://medium.com/clover-platform-blog/ecommerce-tokenization-understanding-methods-that-keep-card-data-safe-5dea8e95a3de) to learn more.

## Advantages of tokenization

- Enhances security — Replace PAN details on a card with a randomly generated token.
- Improves PCI DSS compliance — Meet security requirements and reduce the scope and cost of PCI compliance efforts.
- Improves authorization rates — Payment tokens improve gateway payment authorization rates.
- Facilitates recurring payments — Allow more subscription billing and uninterrupted service for subscription-based businesses.

The following table explains the card tokenization services in Clover to help determine your integration with Clover:

| Use cases | Clover tokens | TransArmor tokens |
|---|---|---|
| **Function** | Generate tokens to process charges on the Clover gateway | Generate payment tokens to process charges on the Clover and Fiserv payment system |
| **Structure** | Alphanumeric  <br>Example: `clv_12345jklbhd` | Numeric  <br>Example: `1234456789021` |
| **Scope** | Specific to a merchant or merchant group | Specific to a merchant or merchant group |
| **Compatibility** | Specific to Clover payments | Compatible across Fiserv payment systems |