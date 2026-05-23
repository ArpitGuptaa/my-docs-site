---
title: "Ecommerce: Integrate Clover Payments plugin with Shopify Online Shop"
slug: "integrate-clover-payments-plugin-with-shopify-online-shop"
excerpt: "Pay Anywhere, Sell Everywhere"
hidden: false
metadata: 
  description: "Learn how to integrate the Clover Payments plugin with Shopify Online Shops in the North America—United States (US) and Canada—region to accept payments using Clover."
  image: []
  robots: "index"
createdAt: "Mon Aug 19 2024 04:00:07 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 17 2024 04:05:47 GMT+0000 (Coordinated Universal Time)"
---
[block:html]
{
  "html": "<!--DS-5828- New topic-->\n<meta name=\" description\" content=\"Learn how to integrate the Clover Payments plugin with Shopify Online Shops in the North America—United States (US) and Canada—region to accept payments using Clover.\" > "
}
[/block]


[block:html]{"html":"<div class=\"container-top\">\n  <!--North America—United States-->\n  <div class=\"container-reg\">\n    <div class=\"pill-reg\">\n      <div class=\"label-reg\">North America—United States and Canada</div>\n    </div>\n  </div>\n</div>\n\n<!--Css-->\n<style>\n.container-top {\n  top: -15px;\n  position: relative;\n  margin-bottom: -5px;\n}\n\n.container-reg {\n  align-items: center;\n  min-width: auto; \n  width: fit-content;\n  text-align: left;\n  overflow: auto;\n  display: inline-block; \n}\n\n/*Pill format REG*/\n.pill-reg {\n  background: #44BB44;\n  border: .5px solid #44BB44;\n  margin-left: 5px;\n  overflow: hidden;\n  display: flex; \n  justify-content: center; \n  align-items: center; \n  border-radius: 10px;\n  height: 1.8rem;\n  margin-top: 10px;\n  margin-bottom: 1.5px; \n  padding: 0 10px; \n}\n\n/*Text FORMAT inside REG pills */\n.pill-reg .label-reg, \n.pill-reg__addon .label-reg \n{\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  color: #fff;\n  vertical-align: middle;\n  margin: 0;\n  padding: 0 5px;\n}\n</style>"}[/block]

# Before you begin

To integrate the Clover Payments plugin with a Clover merchant's Shopify Online Shop, note the following:

- **Clover merchants**—The free Clover Payments plugin is available for Clover merchants. On the Clover Merchant Dashboard, a merchant:
  - Can have multiple merchantIds but can associate only one <<glossary:merchantId>> with one or more Shopify Online Shops.
  - Can only create a Shopify Online Shop for a specific country and its currency.  
    The merchant's Clover account agreement determines the charges for transactions. Shopify does not support surcharging; hence, only Clover merchants who do not support surcharging can connect with a Shopify Online Shop.
- **Card networks**—Merchants with Shopify Online Shops must select the same card networks on Shopify to ensure a seamless payment transaction process. In case of any changes, Clover communicates the card network settings and updates to Shopify so they can apply the same settings.
- **Best practices**—Review the [best practices and recommendations](https://docs.clover.com/dev/docs/clover-payments-plugin-for-shopify-online-shop#best-practices-and-recommendations) and for additional information, see the introductory topic: [Clover Payments plugin for Shopify Online Shop](https://docs.clover.com/dev/docs/clover-payments-plugin-for-shopify-online-shop).

[block:html]
{
  "html": "<div class=\"vt\">\n   <table class=\"vt\">\n     <colgroup>\n      <col id=\"first\">\n      <col id=\"second\">\n      </colgroup>\n          <thead>\n            <tr class=\"table-head\">\n              <th class=\"table-head\">View or download</th>\n              <th class=\"table-head\">Learn</th>\n            </tr>\n          </thead>\n          <tbody>\n <!--1st body Row-->\n            <tr class=\"table-content\">\n              \n<!--1st cell: Video thumbnail; always use the Share > Embed link for the video thumbnail to appear-->\n              <td class=\"table-content\">\n                <p class=\"table-content\" style=\"text-align:center;\"></p>\n      <div style=\"clear: both;padding: 2px;text-align:center;\">\n        <iframe id=\"myiframe100p\" \n        src=\"https://www.youtube.com/embed/HtCaejo_Xqs?si=SdIf0P_DyOPfUbXk\" \n        title=\"Clover Payments plugin: Demo video\" \n        frameborder=\"0\" \n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; \n               gyroscope; picture-in-picture; web-share\" \n        allowfullscreen>\n      </iframe>\n       </div>\n         </td>\n <!--2nd cell: Explanation-->\n          <td class=\"table-content\">\n<p class=\"table-content\">In this video, learn:</p>\n    <ul class=\"table-content\">\n      <li>How to install and activate the Clover Payments plugin</li>\n      <li>Connect the Clover Payments for Shopify plugin with a merchant</li>\n      <li>Place and order on the Shopify Online Shop and pay with the Clover Payments plugin</li>\n    </ul>\n         </td>\n          </tr>\n <!--end 1st body Row-->\n          </tbody>\n   </table>\n</div>\n\n<!--=========================================================-->\n<!--related styles are in Reusable HTML content block - Video-Embed-Table-Code.-->"
}
[/block]


***

# Prerequisites

1. Clover merchant account with the Owner role and a Clover `merchantId`.  
   **Note: **Surcharge-enabled merchantId cannot be connected to a Shopify Online Shop.
2. Shopify Online Shop for the Clover merchant.

# 1. Install the Clover Payments plugin

1. Log in to your <a href="https://accounts.shopify.com/lookup?rid=c5483bbc-2be4-41fb-99ce-6d3189b439f9&verify=1707130110-NDU4MzUzZDg5NDk1MDFjYjg3ZWRjMGI1NDdkNWM4Y2RjNWJlMGMzZmU1N2RkOTcxYzhkOWRiOWQzMmEwNDllYw" target="_blank">Shopify Online Store account</a>.
2. Click **Settings** > **Payments**. The Payments page appears. On this page, you can add different payment providers and methods.  
   **Note:** Click test payment provider to use the Bogus Gateway to test a payment provider.
3. In the Payment providers section, click Choose a provider.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/20c0d09-01-ChooseProvider.png",
        "",
        "Shopify Store: Payments > Choose a provider"
      ],
      "align": "center",
      "sizing": "100% ",
      "border": true,
      "caption": "Shopify Online Shop: Payments > Choose a provider"
    }
  ]
}
[/block]


The Third-party payment providers page appears.

4. Enter **Clover** in the Filter third-party payment field and click the search icon. Clover Payments displays in the search results.
5. Click **Clover Payments** and then click **Install**. The Install app page appears.
6. Review or add information as needed.
7. Click **Install**. The Clover Payments plugin page appears.
8. Click **Manage Account**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1bfa344-CloverPaymentsInstalled.png",
        "",
        "Clover Payments: Manage Account"
      ],
      "align": "center",
      "border": true,
      "caption": "Clover Payments: Manage Account"
    }
  ]
}
[/block]


The Clover Merchant Log In page appears.

9. Log in to your Merchant Dashboard and complete the steps to Connect the Clover Payments plugin with a merchant.

# 2. Connect the Clover Payments plugin with a merchant

On the Clover Merchant Dashboard, select the merchant to integrate the Clover Payments plugin with the Shopify Online Shop.

1. Log in to the Clover Merchant Dashboard. The Select a Merchant page appears.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9facbc4-Select-merchant.png",
        "",
        "Clover Merchant Dashboard: Select a Merchant page"
      ],
      "align": "center",
      "sizing": "70% ",
      "border": true,
      "caption": "Clover Merchant Dashboard: Select a Merchant page"
    }
  ]
}
[/block]


2. From the Merchant column, click a merchant. The Clover App Market displays the Clover Payments plugin in the Merchant Dashboard.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e68e747-05-ConnectPlugin.png",
        "",
        "Merchant Dashboard > More Tools > Clover Payments for Shopify plugin > Connect button"
      ],
      "align": "center",
      "sizing": "112% ",
      "border": true,
      "caption": "Merchant Dashboard > More Tools > Clover Payments for Shopify plugin > Connect button"
    }
  ]
}
[/block]


3. Click **Connect**. The Pricing & Subscription pop-up appears. The Free subscription option is selected by default.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0a85f50-06-Subscribe.png",
        "",
        "Pricing & Subscription Information pop-up"
      ],
      "align": "center",
      "sizing": "60% ",
      "border": true,
      "caption": "Pricing & Subscription Information pop-up"
    }
  ]
}
[/block]


4. Click **Connect**. The Select a Merchant page reappears.  
   Reselect the merchant's name. The Review card brands accepted by \<_store name_> page appears.  
   **Note: **The page displays all the card network brands associated with merchant ID during their onboarding. Merchants with Shopify Online Shops must select the same card networks on Shopify to ensure a seamless payment transaction process.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eff2cca-image.png",
        null,
        "Clover Merchant Dashboard: Review credit card networks"
      ],
      "align": "center",
      "sizing": "70% ",
      "border": true,
      "caption": "Clover Merchant Dashboard: Review credit card networks"
    }
  ]
}
[/block]


5. Review the information and click **Confirm**. The Shopify Online Shop Dashboard appears.  
   **Note:** To integrate the Clover Payments plugin with another business's Shopify Online Shop, click **Choose your business**. Search for and select another merchant on the Select a Merchant page.

[block:html]{"html":"<style>\n*,\n*::before,\n*::after {\n  box-sizing: border-box; \n  }\n\n/*== Video Table (vt) sample styles ==*/\n  \n /*video table (vt) size based on percentage of container*/\n  div.vt {width:100%; overflow:auto;}\n  table.vt, td.vt {border:1px solid #000;}\n  #first {width:30%;}\n  #second {width:60%;}\n\n  tr.table-head th.table-head /*background-color table header row*/\n{\n\tbackground-color: #280;\n  margin-block-start: 1em;\n  color: #fff;\n  margin-top: 0px;\n\tfont-size: 1.4em;\n\tfont-weight: 500;\n  overflow-wrap: normal;\n  word-break: normal;\n  }\n\n  td.table-head\n{\n  margin-block-start: 1em;\n  color: #fff;\n\tpadding: 10px;\n\tmargin-top: 0px;\n\tfont-size: 1.4em;\n\tfont-weight: 500;\n  overflow-wrap: normal;\n  word-break: normal;\n}\n  tr.table-content {\n  vertical-align: top;\n  }\n  td.table-content\n{\n  vertical-align: top !important;\n  margin-block-start: 1em;\n}\np.table-title\n{\n\tcolor: #fff;\n\tpadding: 10px;\n\tmargin-top: 0px;\n\tfont-size: 1.4em;\n\tfont-weight: 500;\n  overflow-wrap: normal;\n  word-break: normal;\n}\n  \np.table-content\n{\n\tpadding-left: 4%;\n\tpadding-right: 4%;\n  overflow-wrap: normal;\n  vertical-align: top;\n  margin-block-start: 1em;\n}\nul.table-content\n{\n  margin-block-start: 1em;\n}\n/*== iframe sample sizes ==*/  \n  \n  /*iframe size based on percentage of container*/\n  #myiframe100p {\n      width: 100%;\n      height: 100%;\n   }\n    #myiframe90p {\n      width: 90%;\n      height: 100%;\n      m\n   }\n  #myiframe75p {\n      width: 75%;\n      height: 75%;\n   }\n  #myiframe60p {\n      width: 60%;\n      height: 60%;\n   }\n  #myiframe50p {\n      width: 50%;\n      height: 50%;\n   }\n \n</style>"}[/block]
