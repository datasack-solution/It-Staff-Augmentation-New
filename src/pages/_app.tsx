import { CallUsModalProvider } from "@/components/CallUsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <CallUsModalProvider><Component {...pageProps} /></CallUsModalProvider>;
}
