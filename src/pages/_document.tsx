import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
       
        <link rel="preload" as="image" href="/brands_color/alinma_bank.png" />
        <link rel="preload" as="image" href="/brands_color/alrajhi_bank.png" />
        <link rel="preload" as="image" href="/brands_color/bank_albilad.png" />
        <link rel="preload" as="image" href="/brands_color/future_generali.png" />
        <link rel="preload" as="image" href="/brands_color/nibav.png" />
        <link rel="preload" as="image" href="/brands_color/olam.png" />
        <link rel="preload" as="image" href="/brands_color/reliance_capital.png" />
        <link rel="preload" as="image" href="/brands_color/enjaz.png" />

        <link rel="preload" as="image" href="/alinma_bank.png" />
        <link rel="preload" as="image" href="/alrajhi_bank.png" />
        <link rel="preload" as="image" href="/bank_albilad.png" />
        <link rel="preload" as="image" href="/future_generali.png" />
        <link rel="preload" as="image" href="/nibav.png" />
        <link rel="preload" as="image" href="/olam.png" />
        <link rel="preload" as="image" href="/reliance_capital.png" />
        <link rel="preload" as="image" href="/enjaz.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
