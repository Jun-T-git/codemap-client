import "~/styles/style.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { ReactElement } from "react";
import Header from "~/components/header";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
