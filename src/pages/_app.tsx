import "~/styles/style.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import Header from "~/components/header";
import { RecoilRoot } from "recoil";
import Footer from "~/components/footer";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Codemap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <div className="min-h-screen flex flex-col justify-between">
          <div>
            <Header />
            <div className="max-w-6xl mx-auto">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </div>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
