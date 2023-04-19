import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
