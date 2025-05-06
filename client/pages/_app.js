import '@/styles/globals.css'; // Global CSS file for Tailwind and custom styles
import { SWRConfig } from 'swr'; // To wrap app with SWR config
import Head from 'next/head'; // For managing head content, like title or meta tags

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PropXpert - AI-powered insights for sports betting player props"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          // You can configure global fetcher and error retry strategies here
          fetcher: (url) => fetch(url).then((res) => res.json()),
          onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (retryCount >= 3) return; // Stop retrying after 3 attempts
            setTimeout(() => revalidate({ retryCount }), 5000);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;