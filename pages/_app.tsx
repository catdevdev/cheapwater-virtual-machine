/* imports */
import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../theme/globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js TypeScript Quickstart</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
