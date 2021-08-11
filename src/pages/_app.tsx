import "~/styles/style.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import Header from "~/components/header";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
