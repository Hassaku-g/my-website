import Head from "next/head";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    // <AnimatePresence mode="wait" initial={true}>
    //   <Component {...pageProps} key={router.asPath} />
    // </AnimatePresence>
    <>
      <Head>
        <link rel="preload" href="/fonts/Inter-roman.latin.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
