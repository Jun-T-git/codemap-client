import "~/styles/style.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import Header from "~/components/header";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
