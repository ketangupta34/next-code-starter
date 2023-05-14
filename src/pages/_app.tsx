import { AppProps } from "next/app";
import Head from "next/head";
import "../../public/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Really Brief</title>
        <link rel="shortcut icon" href="/reallybrief-favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
