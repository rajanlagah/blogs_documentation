import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-HS89G3RT4F`}
      />

      <Script strategy="lazyOnload">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-HS89G3RT4F');
    `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
