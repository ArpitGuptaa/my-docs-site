---
title: "Integrate Clover payments plugin with Shopify"
slug: "integrate-payments-plugin-with-Shopify"
excerpt: "Pay Anywhere, Sell Everywhere"
hidden: false
metadata:
  description: "Learn how to integrate the Clover Payments plugin with Shopify Online Shops in the North America—United States (US) and Canada—region to accept payments using Clover."
  image: []
  robots: "index"
createdAt: "Mon Aug 19 2024 04:00:07 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 17 2024 04:05:47 GMT+0000 (Coordinated Universal Time)"
---

# Integrate Clover payments plugin with Shopify

To integrate the Clover Payments plugin with a Clover merchant's Shopify Online Shop, note the following:

- **Clover merchants**: The free Clover Payments plugin is available for Clover merchants. On the Clover Merchant Dashboard, a merchant:
  - Can have multiple merchantIds but can associate only one merchantId with one or more Shopify Online Shops.
  - Can only create a Shopify Online Shop for a specific country and its currency.

  The merchant's Clover account agreement determines the charges for transactions. Shopify does not support surcharging; hence, only Clover merchants who do not support surcharging can connect with a Shopify Online Shop.

- **Card networks**: Merchants with Shopify Online Shops must select the same card networks on Shopify to ensure a seamless payment transaction process. In case of any changes, Clover communicates the card network settings and updates to Shopify so they can apply the same settings.

- **Best practices**: Review the best practices and recommendations and for additional information.

## Video Overview

### Learn how to:

- Install and activate the Clover Payments plugin
- Connect the Clover Payments for Shopify plugin with a merchant
- Place an order on the Shopify Online Shop and pay with the Clover Payments plugin

### Demo Video

<iframe width="100%" height="400" src="https://www.youtube.com/embed/HtCaejo_Xqs?si=SdIf0P_DyOPfUbXk" title="Clover Payments plugin: Demo video" frameborder="0" allowfullscreen></iframe>

# Prerequisites

- Clover merchant account with the Owner role and a Clover `merchantId`.

- Shopify Online Shop for the Clover merchant.

# Steps

## 1. Install the Clover Payments plugin

1. Log in to your [Shopify Online Store account](https://accounts.shopify.com/lookup?rid=c5483bbc-2be4-41fb-99ce-6d3189b439f9&verify=1707130110-NDU4MzUzZDg5NDk1MDFjYjg3ZWRjMGI1NDdkNWM4Y2RjNWJlMGMzZmU1N2RkOTcxYzhkOWRiOWQzMmEwNDllYw).

2. Click **Settings** > **Payments**.

   **Note:** Click test payment provider to use the Bogus Gateway to test a payment provider.

3. In the Payment providers section, click **Choose a provider**.

   ![Shopify Online Shop: Payments > Choose a provider](https://files.readme.io/20c0d09-01-ChooseProvider.png)

4. Enter **Clover** in the **Filter third-party payment** field and click the search icon.

5. Click **Clover Payments** and then click **Install**.

6. Review or add information as needed.

7. Click **Install**.

8. Click **Manage Account**.

   ![Clover Payments: Manage Account](https://files.readme.io/1bfa344-CloverPaymentsInstalled.png)

9. Log in to your Merchant Dashboard and complete the steps to connect the Clover Payments plugin with a merchant.

## 2. Connect the Clover Payments plugin with a merchant

On the Clover Merchant Dashboard, select the merchant to integrate the Clover Payments plugin with the Shopify Online Shop.

1. Log in to the Clover Merchant Dashboard.

   ![Clover Merchant Dashboard: Select a Merchant page](https://files.readme.io/9facbc4-Select-merchant.png)
   
2. From the Merchant column, click a merchant.

   ![Merchant Dashboard > More Tools > Clover Payments for Shopify plugin > Connect button](https://files.readme.io/e68e747-05-ConnectPlugin.png)

3. Click **Connect**.

   ![Pricing & Subscription Information pop-up](https://files.readme.io/0a85f50-06-Subscribe.png)

4. Click **Connect** and reselect the merchant's name.

   **Note:** The page displays all the card network brands associated with merchant ID during onboarding. Merchants with Shopify Online Shops must select the same card networks on Shopify to ensure a seamless payment transaction process.
   
   ![Clover Merchant Dashboard: Review credit card networks](https://files.readme.io/eff2cca-image.png)

5. Review the information and click **Confirm**.

   **Note:** To integrate the Clover Payments plugin with another business's Shopify Online Shop, click **Choose your business**. Search for and select another merchant on the Select a Merchant page.