import { AppProps } from 'next/app';
import Head from 'next/head';
import '../../public/style.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GPT Chat</title>
        <link rel="shortcut icon" href="/chatgpt-icon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
