import { CallUsModalProvider } from "@/components/CallUsContext";
import { useUserTracking } from "@/components/Tracking/useTracking";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useUserTracking()
  return <CallUsModalProvider><Component {...pageProps} /></CallUsModalProvider>;
}
