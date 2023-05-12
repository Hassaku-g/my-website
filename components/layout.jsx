import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function layout({ title, children, post }) {
  const router = useRouter();
  const paths = ["/", "/works", "/posts"];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.main className="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
        <article>{children}</article>
      </motion.main>
      <footer className="footer">
        <p className="footer-copy">
          <small>Copyright &copy; 2023 daichi mishima. All rights reserved.</small>
        </p>
      </footer>
    </>
  );
}
