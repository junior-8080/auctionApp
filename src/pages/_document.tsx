import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" role="main">
      <Head>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MN7FVX6');
          `,
          }}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <noscript><iframe src=https://www.googletagmanager.com/ns.html?id=GTM-MN7FVX6
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              `,
          }}
        />
        <Main />
        <NextScript />

        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
            var options = {
            call: "+233549546725", // Call phone number
            facebook: "109192798670574", // Facebook page ID
            telegram: "AfriLuckTelegram", // Telegram bot username
            whatsapp: "+233549546725", // WhatsApp number
            company_logo_url: "//storage.getbutton.io/widget/fe/fe47/fe47d1210a962d940b0ef8fb43afabe5/logo.jpg", // URL of company logo (png, jpg, gif)
            button_image_url: "", // URL of button image (png, jpg, gif)
            greeting_message: "Hello, thank you for contacting AfriLuck! Please let us know how we can help you.", // Text of greeting message
            call_to_action: "Contact us", // Call to action
            button_color: "#A8CE50", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "call,telegram,whatsapp,facebook", // Order of buttons
            ga: true, // Google Analytics enabled
            branding: false, // Show branding string
            mobile: true, // Mobile version enabled
            desktop: true, // Desktop version enabled
            greeting: false, // Greeting message enabled
            shift_vertical: 0, // Vertical position, px
            shift_horizontal: 0, // Horizontal position, px
            domain: "afriluck.com", // site domain
            key: "NS-que4RTTGpODaS5M4z3A", // pro-widget key
            };
            var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
            s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
            })();
          `,
          }}
        />
      </body>
    </Html>
  );
}
