---
title: "Ecommerce tokenization overview"
slug: "ecommerce-tokenization-overview"
excerpt: ""
hidden: false
metadata: 
  description: "Learn about the advantages of tokenization and the Clover Ecommerce token types."
  image: []
  robots: "index"
createdAt: "Fri Oct 04 2024 08:40:43 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Oct 09 2024 10:18:20 GMT+0000 (Coordinated Universal Time)"
---
<meta name=" description" content= "Learn about the advantages of tokenization and the Clover Ecommerce token types.">

[block:html]{"html":"<div class=\"container-top\">\n  <!--North America—United States-->\n  <div class=\"container-reg\">\n    <div class=\"pill-reg\">\n      <div class=\"label-reg\">North America—United States and Canada</div>\n    </div>\n  </div>\n</div>\n\n<!--Css-->\n<style>\n.container-top {\n  top: -15px;\n  position: relative;\n  margin-bottom: -5px;\n}\n\n.container-reg {\n  align-items: center;\n  min-width: auto; \n  width: fit-content;\n  text-align: left;\n  overflow: auto;\n  display: inline-block; \n}\n\n/*Pill format REG*/\n.pill-reg {\n  background: #44BB44;\n  border: .5px solid #44BB44;\n  margin-left: 5px;\n  overflow: hidden;\n  display: flex; \n  justify-content: center; \n  align-items: center; \n  border-radius: 10px;\n  height: 1.8rem;\n  margin-top: 10px;\n  margin-bottom: 1.5px; \n  padding: 0 10px; \n}\n\n/*Text FORMAT inside REG pills */\n.pill-reg .label-reg, \n.pill-reg__addon .label-reg \n{\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  color: #fff;\n  vertical-align: middle;\n  margin: 0;\n  padding: 0 5px;\n}\n</style>"}[/block]

# What is tokenization

Tokenization is a powerful security measure used by merchants, payment processors, and banks to safeguard sensitive financial and personal information from cybercrime and fraud. Tokenization replaces a user's payment details, such as credit card numbers, expiration dates, and card verification values or codes (CVV or CVC), with non-specific identifiers called **tokens**. These tokens are randomly generated when a customer provides their payment information at the point of sale (POS) or on an ecommerce website. 

# Advantages of tokenization

- **Enhanced security**—Tokens prevent the exposure of sensitive data during transactions.
- **PCI DSS compliance**—Tokenization helps merchants meet <a href="https://www.clover.com/ca/small-business-resources/pci-compliance" target="_blank">Payment Card Industry Data Security Standard (PCI DSS</a> requirements, reducing the scope and cost of compliance efforts.
- **Secure storage**—Merchants can store tokens without risking customer account numbers or other sensitive data.
- **Fraud prevention**—Third parties can't reverse-engineer tokens to obtain payment information.
- **Improved authorization rates**—Payment tokens can enhance the gateway payment authorization rates, leading to fewer declined transactions.
- **Recurring payments**—Tokenization supports subscription billing and uninterrupted service for subscription-based businesses.

# Clover Ecommerce token types

Clover supports various token types, including card tokens, ACH tokens for bank transactions, and gift card tokens.

[block:html]
{
  "html": "<html lang=\"en\">\n  <style>\n    .wrapper {\n      width: 90%;\n      display: flex;\n      flex-wrap: wrap;\n      gap: 10px;\n    }\n    .box {\n      flex: 1 1 calc(50% - 10px);\n      height: auto;\n      text-align: left;\n      margin-bottom: 4px;\n      overflow: hidden;\n      border: 1px solid #D8D8D8;\n      padding: 10pt;\n      box-sizing: border-box;\n    }\n    h2.g {\n      font-family: Graphik-regular;\n      font-size: 16px;\n      color: #228800;\n      margin: 2px 0 8px 0;\n    }\n    p.box, p.small-text {\n      font-family: Graphik-regular;\n      font-size: 15px;\n      color: #5A5A5A;\n    }\n    .btn {\n      border: none;\n      background-color: inherit;\n      font-family: Graphik-regular;\n      font-size: 14px;\n      color: #228800;\n      text-align: left;\n      cursor: pointer;\n    }\n    .btn:hover {\n      color: #5D5D5D;\n    }\n    .btn a {\n      text-decoration: none;\n      color: inherit;\n    }\n    .btn::before {\n      content: \"➔ \";\n      color: #228800;\n    }\n    @media (max-width: 768px) {\n      .box {\n        flex: 1 1 calc(100% - 10px);\n      }\n    }\n  </style>\n<body>\n  <div class=\"wrapper\" role=\"main\">\n    <div class=\"box\" role=\"region\" aria-labelledby=\"card-token\">\n      <h2 id=\"card-token\" class=\"g\">Card token</h2>\n      <p class=\"small-text\">Used to securely store and process credit card information with a unique token. The card token is used for future transactions such as for recurring payments and card-not-present (CNP) transactions.</p>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/docs/create-a-card-token\">See the tutorial</a></button>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/reference/create-card-token\">Use the endpoint</a></button>\n    </div>\n    <div class=\"box\" role=\"region\" aria-labelledby=\"TransArmor-token\">\n      <h2 id=\"TransArmor-token\" class=\"g\">TransArmor token</h2>\n      <p class=\"small-text\">Multilayered, end-to-end security to safeguard cardholder data at every stage of the payment process, using the TransArmor® solution from Fiserv.</p>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/docs/use-transarmor-token\">See the tutorial</a></button>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/reference/createcharge\">Use the endpoint</a></button>\n    </div>\n    <div class=\"box\" role=\"region\" aria-labelledby=\"ACH-token\">\n      <h2 id=\"ACH-token\" class=\"g\">ACH token</h2>\n      <p class=\"small-text\">Used for processing electronic payments directly from bank accounts. ACH (Automated Clearing House) tokens replace sensitive bank account information with a token to use for transactions.</p>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/docs/create-an-ach-token\">See the tutorial</a></button>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/reference/create-ach-token\">Use the endpoint</a></button>\n    </div>\n    <div class=\"box\" role=\"region\" aria-labelledby=\"gift-card\">\n      <h2 id=\"gift-card\" class=\"g\">Gift card token</h2>\n      <p class=\"small-text\">Used to manage and process gift card transactions. The gift card number is replaced with a token to use when activating a gift card, checking the balance and completing transactions with the gift card.</p>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/docs/create-a-gift-card-token\">See the tutorial</a></button>\n      <button class=\"btn\"><a href=\"https://docs.clover.com/dev/reference/create-gift-card-token\">Use the endpoint</a></button>\n    </div>\n  </div>\n</body>\n</html>"
}
[/block]


***

# Related topics

- [Blog: Ecommerce Tokenization: Understanding Methods that Keep Card Data Safe](https://medium.com/clover-platform-blog/ecommerce-tokenization-understanding-methods-that-keep-card-data-safe-5dea8e95a3de)
- [Ecommerce card tokenization](https://docs.clover.com/dev/docs/ecommerce-tokenization)
