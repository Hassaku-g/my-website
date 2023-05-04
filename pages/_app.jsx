import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
