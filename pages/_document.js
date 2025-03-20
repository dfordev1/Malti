import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="mt">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="http://www.maltiquran.com" />
        <link rel="alternate" href="http://maltiquran.com" hrefLang="mt" />
        <meta name="language" content="mt" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Malti Quran - Discover the Quran in Maltese with authentic translations and insightful commentary." />
        <meta property="og:title" content="Malti Quran" />
        <meta property="og:description" content="Malti Quran - Discover the Quran in Maltese with authentic translations and insightful commentary." />
        <meta property="og:url" content="https://maltiquran.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.maltiquran.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Malti Quran" />
        <meta name="twitter:description" content="Malti Quran - Discover the Quran in Maltese with authentic translations and insightful commentary." />
        <meta name="twitter:image" content="https://www.maltiquran.com/og-image.jpg" />
        <link rel="canonical" href="https://maltiquran.com/" />
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11428660364"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11428660364');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Malti Quran",
            "url": "https://maltiquran.com/"
          }) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 