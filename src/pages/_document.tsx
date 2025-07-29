import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-K5PX72CC');
                        `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://www.schema.org",
            "@type": "ProfessionalService",
            "name": "DataSack Solutions",
            "url": "https://www.datasack.in/",
            "logo": "https://bunny-wp-pullzone-dgpgtislbk.b-cdn.net/wp-content/uploads/2024/01/Datasack_tech_logo-web.png",
            "image": "https://bunny-wp-pullzone-dgpgtislbk.b-cdn.net/wp-content/uploads/2024/01/Datasack_tech_logo-web.png",
            "description": "DataSack Solutions delivers end-to-end services. from SAP, Temenos, and data to digital marketing and IT staffing that drives success.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "District, Door No 1, Building No 2345, Ahmed Al Tamimi Al Malaz, Riyadh 12831, Saudi Arabia",
              "addressLocality": "Riyadh",
              "addressRegion": "Saudi Arabia",
              "postalCode": "12831",
              "addressCountry": "Saudi Arabia"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.6647",
              "longitude": "46.7353"
            },
            "hasMap": "https://maps.app.goo.gl/u2K1GNmqe5ykpn8RA",
            "openingHours": "Mo, Tu, We, Th, Su 09:30-05:30",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966560858596",
              "contactType": "Phone"
            }
          })
        }} />

        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </Head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5PX72CC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
