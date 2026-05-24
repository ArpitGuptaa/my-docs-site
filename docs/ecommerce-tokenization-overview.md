---
title: "Ecommerce tokenization overview"
slug: "ecommerce-tokenization"
excerpt: ""
hidden: false
metadata:
  description: "Learn about the advantages of tokenization and the Clover Ecommerce token types."
  image: []
  robots: "index"
createdAt: "Fri Oct 04 2024 08:40:43 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Oct 09 2024 10:18:20 GMT+0000 (Coordinated Universal Time)"
---

<meta name="description" content="Learn about the advantages of tokenization and the Clover Ecommerce token types.">

# What is tokenization

Tokenization is a powerful security measure used by merchants, payment processors, and banks to safeguard sensitive financial and personal information from cybercrime and fraud. Tokenization replaces a user's payment details, such as credit card numbers, expiration dates, and card verification values or codes (CVV or CVC), with non-specific identifiers called **tokens**.

These tokens are randomly generated when a customer provides their payment information at the point of sale (POS) or on an ecommerce website.

# Advantages of tokenization

- **Enhanced security** — Tokens prevent the exposure of sensitive data during transactions.
- **PCI DSS compliance** — Tokenization helps merchants meet [Payment Card Industry Data Security Standard (PCI DSS)](https://www.clover.com/ca/small-business-resources/pci-compliance) requirements, reducing the scope and cost of compliance efforts.
- **Secure storage** — Merchants can store tokens without risking customer account numbers or other sensitive data.
- **Fraud prevention** — Third parties can't reverse-engineer tokens to obtain payment information.
- **Improved authorization rates** — Payment tokens can enhance gateway payment authorization rates, leading to fewer declined transactions.
- **Recurring payments** — Tokenization supports subscription billing and uninterrupted service for subscription-based businesses.

# Clover Ecommerce token types

Clover supports various token types, including card tokens, ACH tokens for bank transactions, and gift card tokens.

## Card token

Used to securely store and process credit card information with a unique token. The card token is used for future transactions such as recurring payments and card-not-present (CNP) transactions.

---

## TransArmor token

Multilayered, end-to-end security safeguards cardholder data at every stage of the payment process using the TransArmor® solution from Fiserv.

---

## ACH token

Used for processing electronic payments directly from bank accounts. ACH (Automated Clearing House) tokens replace sensitive bank account information with a token for transactions.


---

## Gift card token

Used to manage and process gift card transactions. The gift card number is replaced with a token for activating a gift card, checking balances, and completing transactions.
