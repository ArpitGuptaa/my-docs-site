---
title: "Integrate with Apple Pay: Implementation options"
slug: "apple-pay-implementation-options"
excerpt: "Apple Pay payments integration with Clover Ecommerce API integration and Clover-hosted iframe"
hidden: false
metadata:
  description: "Learn about the requirements and the procedures to complete Apple Pay payments integration with Clover Ecommerce APIs and Clover-hosted iframe."
  image: []
  robots: "index"
createdAt: "Wed Sep 18 2024 05:00:19 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Nov 08 2024 12:46:13 GMT+0000 (Coordinated Universal Time)"
---


<meta name="description" content="Learn about the requirements and the procedures to complete Apple Pay payments integration with Clover Ecommerce APIs and Clover-hosted iframe.">

<!--
New: DS-7018; Apple merchant ID identifier - is correct terminology as suggested by SME Kate
Updated: DS-7258; images and text in the iframe integration section
Updated: DS-7020 to redirect to the Apple Pay payment tutorial
-->


---

# Apple Pay for Ecommerce Clover API integration

This Clover implementation for Apple Pay is for merchants who may already have Apple Pay on their ecommerce websites and native mobile apps. Their Apple Pay integration is with non-Clover payment gateways, and they want to migrate to Clover or use custom API integrations.

The required elements for this implementation are:

- **Apple merchant ID identifier** — The identifier for the Apple Merchant ID is a unique string value created when you register a Merchant ID in the Apple developer platform. The identifier is required to establish mutual TLS communication between the Clover server and the Apple Payments server.
- **Merchant payment processing certificate** — The merchant payment processing certificate in a `.csr` file format is used to decrypt the encrypted payment payload for Apple Pay.

Merchants or their developers need to add a Certificate Signature Request (CSR) from Clover to the Apple Pay developer platform using their developer account. See the following procedures for information.

![Apple Pay integration with Clover Ecommerce API](https://files.readme.io/ca0f202a5b918306dc34956816fb4b0f9e557f5779a1017bb85da15c02c0ece9-Ecomm-Apple-Identifier-CSR-file-flow.png)

*Apple Pay integration with Clover Ecommerce API*

---

## Upload the Certificate Signing Request (CSR) file

### Prerequisite

Read the Apple documentation to activate the merchant CSR file for Clover.

### Step 1: Copy existing Apple merchant ID

You need to share the registered identifier for the Apple merchant ID from your merchant's Apple developer account with Clover. The Apple merchant ID identifier uniquely identifies a business and lets the merchant accept payments using Apple Pay services. This identifier never expires and can be used across multiple apps and websites.

1. Log in to your Apple Developer account.
2. In Program Resources, click **Certificates, IDs & Profiles** > **Identifiers**. The Identifiers page appears.
3. In the search field, enter **Merchant IDs**. Available Apple merchant IDs display on the page.
4. From the Identifier column, copy the identifier that you need to share with Clover.

### Step 2: Share the identifier and download a CSR file from Clover

1. Log in to the Clover Merchant Dashboard.
2. Go to **Accounts & Setup** > **Ecommerce** > **Ecommerce Payments**. The Ecommerce Settings page appears.
3. Scroll down to **Apple Pay** > **API Integration**, and click the blue link in the instructions to share your Apple Merchant ID identifier with Clover.

![Clover Merchant Dashboard: Apple Pay API Integration domain verification link](https://files.readme.io/33bd14bcf69abd4103da40c20e67efa5d31e1d28a95bffc6576882842cad6159-ApplePay-APIIntegration.png)

*Clover Merchant Dashboard: Apple Pay API Integration domain verification link*

The **Share your Apple merchant information with Clover** pop-up appears.

![Clover Merchant Dashboard: Share your Apple merchant information with Clover](https://files.readme.io/4cd0ed1b89296bca0185e89c88b2fb1b039158d8078cf40dafd973e54c807579-2-ShareAppleMerchantID.png)

*Clover Merchant Dashboard: Share your Apple merchant information with Clover*

4. In the Identifier field, enter the Apple merchant ID identifier you copied in Step 1 and complete the other fields.
5. Click **OK**. The **Manage Certificate Signing Requests** pop-up appears.

![Clover Merchant Dashboard: Manage Certificate Signing Request pop-up](https://files.readme.io/038c678d2a122457bbb59136d6e2918fff63ced076220ace5cd5531ad7e56a03-3-ApplePay-DownloadCert.png)

*Clover Merchant Dashboard: Manage Certificate Signing Request pop-up*

6. Review the information and click the **Certificate Signing Request** link. The Certificate Signing Request (CSR) downloads in the `.csr` file format in your default Downloads folder.
7. Click **Done**.

### Step 3: Upload the CSR file to your Apple developer account

The payment processing certificate is associated with a registered Apple merchant ID identifier and used to secure transaction data. After you generate the certificate in Step 2, you need to upload the downloaded Certificate Signing Request (CSR) file to your Apple developer account.

1. In Program Resources, click **Certificates, IDs & Profiles** > **Identifiers**. The Identifiers page appears.
2. In the search field, enter Merchant IDs. Available merchant IDs display on the page.
3. Click the merchant ID for which you created a CSR file on the Clover Merchant Dashboard. The Edit or Configure Merchant ID page appears.
4. Click **No** for the message confirming that payments associated with the Apple merchant ID will not be processed exclusively in mainland China.
5. Click **Continue**.
6. In the Apple Pay Payment Processing Certificate section, click **Create Certificate**. The Create a New Certificate page appears.
7. In the Upload a Certificate Signing Request section, click **Choose File** and browse to the previously downloaded CSR file (in the `.csr` file format).
8. Click **Continue** to upload the CSR file to your Apple developer account. The Apple Pay Payment Processing Certificate section displays the certificate name, type, and expiry date. In this section, you can activate, revoke, or download a certificate. If multiple certificates are displayed in the section, remember to activate the latest certificate you added for Clover for successful Apple Pay integration.

Once the CSR file is successfully uploaded, Clover has the encryption key, and Apple has the decryption required to process Apple Pay payments securely.

---

## Manage Certificate Signing Request (CSR) files

The CSR file is valid for a year on the Apple Pay developer platform. Clover lets you create two CSR files at a time. The best practice is to create a new CSR file just before your current CSR file expires so that you can upload the new CSR file to the Apple Pay developer platform and delete the CSR that will expire. You can also remove the revoked or expired CSR file from Clover.

### Prerequisite

Read the Apple documentation to activate the merchant CSR file for Clover.

### Steps

1. Log in to the Clover Merchant Dashboard.
2. Go to **Accounts & Setup** > **Ecommerce** > **Ecommerce Payments**.
3. Scroll down to **Apple Pay** > **API Integration**. The Apple merchant ID identifier file you previously shared with Clover displays in the section.

![Ecommerce Payments > API Integration section > Apple Pay merchant ID](https://files.readme.io/54af1a9ee1d7e5d9978ddb05d7103e74670f7191e2762d572f48a3c0a8144ad1-4-API-Integration-CSR-file.png)

*Clover Merchant Dashboard: Ecommerce Payments page > Apple Pay section > API Integration*

4. Do one of the following, as needed:

- In the Action column, click the delete icon to delete the Apple merchant ID identifier.
- In the Identifier section, click the Apple merchant ID identifier. The **Manage Certificate Signing** pop-up appears.

![Manage Certificate Signing Requests pop-up](https://files.readme.io/54cbbdc76f2a9e0260a028b71f39a05c1dfb936b6163c86e3c0f2c96888616c1-5-ApplePay-PaymentProcessing.png)

*Clover Merchant Dashboard: Manage Certificate Signing Requests pop-up*

On the **Manage Certificate Signing** pop-up:

1. Click **Create Certificate** to create a CSR file.
2. In the Certificate Signing Request(s) section, click **Download** to download the CSR file in `.csr` format to your default Downloads folder.
3. Click **Done**.

---

## Create an Apple Pay payment token

To use Apple Pay as part of your payment integration, you need to pass information received from Apple Pay in your payment token request.

To start the integration with the Clover Ecommerce API, create a payment token for the Apple Pay digital wallet transaction. The server returns a `source` token that begins with `clv_`. With a `source` token, you can create a charge, create and pay for orders, accept tips, and save customer cards for future transactions.

---

# 2. Apple Pay for Clover-hosted iframe integration

Merchants can accept Apple Pay payments using the Clover-hosted iframe on their ecommerce website. You need to verify the merchant's ecommerce website domain and subdomain before you can integrate the Apple Pay button on the Clover iframe. Clover provides a verification file for the domain and subdomain.

![Apple Pay integration with Clover iframe](https://files.readme.io/070167b8f1a84dc9ba728a5a95edde6b5ac588a0e7c53277c67fa6687dba9be6-Ecomm-iframe-Apple-Verification.png)

*Apple Pay integration with Clover iframe*

### Step 1: Verify your ecommerce website domain with Apple Pay

1. Log in and do one of the following:

#### On the Developer Dashboard

1. Go to **Your Apps** > **<app name>** > **App Settings**. The App Settings page appears.
2. Click **Ecommerce Settings**. The Edit Ecommerce Settings page appears.
3. In the **Hosted Iframe** option > **IFrame integration** section, click the blue link in the instructions to enter information about the ecommerce website domain.

![Clover Developer Dashboard: Apple Pay iframe integration domain verification link](https://files.readme.io/3b9d636e12f4792f9bce396a9ba5e879d8994e11449a253a8ce556a5c9c69161-DevDashboard-iFrame-DomainVerificationLink.png)

*Clover Developer Dashboard: Apple Pay iframe integration domain verification link*

#### On the Merchant Dashboard

1. Go to **Accounts & Setup** > **Ecommerce** > **Ecommerce Payments**. The Ecommerce Payments page appears.
2. Scroll down to **Apple Pay** > **IFrame integration**, and click the blue link in the instructions to enter information about the ecommerce website domain.

![Clover Merchant Dashboard: Apple Pay iframe integration domain verification link](https://files.readme.io/04b214a50c7eab34c289bb34e9f32455b3108bea2c8e705b806e7a9ff1da5d49-ApplePay-Iframe.png)

*Clover Merchant Dashboard: Apple Pay iframe integration domain verification link*

When you click the blue link either on the Developer Dashboard or the Merchant Dashboard, the **Enable Apple Pay** pop-up appears.

![Clover Hosted iframe settings: Enable Apple Pay pop-up](https://files.readme.io/94ce383bf89dedeb6a5ab95a64ebef2c80b0412895f12b93b451deaf44644844-EnableApplePay-VerificationFile.png)

*Clover Hosted iframe settings: Enable Apple Pay pop-up*

4. In the Website domain field, enter the merchant ecommerce website link.
5. Click the **Download verification file** link.
6. From instruction 3 on the pop-up, copy the location where you need to host the verification file and click **Save**.
7. Host the verification file at the location you copied.

> **Note:** Clover recommends copying and saving the location to host the verification file, as the entire process to verify the file can take a few days.

8. Go back to the IFrame integration section, and click **Verify** next to the domain you added. One of the following status appears:

- **Successful verification** — Status updates to **Verified**.
- **Unsuccessful verification** — An error message appears. In this case:
  - Make sure the verification file is in the correct location on your ecommerce website:  
    `https://{domain}/.well-known/apple-developer-merchantid-domain-association`
  - Check that the embedded file doesn't have a `.txt` extension.
  - Make sure the domains are not behind a proxy or redirect and are accessible to Apple servers.

### Step 2: Add Apple Pay button to the Clover iframe

Once the ecommerce website is verified, you can add the Apple Pay button to a Clover iframe on the website to start accepting payments. When a customer clicks the Apple Pay button on a Clover-hosted iframe, the server redirects to `clover.com`. This domain is already verified with Apple as per their requirements for using Apple Pay on the web. Once the payment checkout flow is completed, the customer is redirected to the merchant's ecommerce website.

---