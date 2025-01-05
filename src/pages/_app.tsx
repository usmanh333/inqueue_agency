import SplashScreen from "@/components/SplashScreen";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SplashScreen />
      <Component {...pageProps} />
    </>
  );
}
