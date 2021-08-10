import "~/styles/style.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { ReactElement } from "react";
import Header from "~/components/header";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
