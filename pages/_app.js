import '../styles/globals.css';
import { FontSizeProvider } from '../context/FontSizeContext';
import { ThemeProvider } from '../context/ThemeContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Il-Quran bil-Malti - Traduzzjoni tal-Quran bil-Malti. Aqra u isma l-Quran bil-Malti." />
        <meta name="keywords" content="Quran, Malti, traduzzjoni, Islam, Maltese, translation" />
        <meta name="author" content="MalteseVersion" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Il-Quran bil-Malti - MalteseVersion" />
        <meta property="og:description" content="Il-Quran bil-Malti - Traduzzjoni tal-Quran bil-Malti. Aqra u isma l-Quran bil-Malti." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MalteseVersion" />
        <meta property="og:locale" content="mt_MT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Il-Quran bil-Malti - MalteseVersion" />
        <meta name="twitter:description" content="Il-Quran bil-Malti - Traduzzjoni tal-Quran bil-Malti. Aqra u isma l-Quran bil-Malti." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://malteseversion.com" />
      </Head>
      <ThemeProvider>
        <FontSizeProvider>
          <Component {...pageProps} />
        </FontSizeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp; 