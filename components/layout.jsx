import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Layout({ children, pageName }) {
  const router = useRouter();

  const variants1 = {
    initial: {
      opacity: 0,
      y: 20,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.4 },
        y: { duration: 0.2 },
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.4 },
        y: { duration: 0.2 },
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.2 },
        y: { duration: 0.4 },
      },
    },
  };

  const variants2 = {
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.4 },
        y: { duration: 0.2 },
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.4 },
        y: { duration: 0.2 },
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.2 },
        y: { duration: 0.4 },
      },
    },
  };

  return (
    <>
      <header>
        <div
          className="header-inner"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "80px",
            paddingBottom: "32px",
          }}
        >
          <div style={{ overflowY: "hidden", marginBottom: "24px" }}>
            <motion.h1 style={{ fontSize: "30px", color: "#d0d0d0", filter: "drop-shadow(0 0 0.3rem #ffffff70)" }} initial="initial" animate="show" exit="exit" variants={variants1}>
              {pageName}
            </motion.h1>
          </div>
          <nav>
            <ul style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
              <li>
                <Link href="/" style={router.pathname === "/" ? { textDecoration: "none", color: "#7d7d7d", pointerEvents: "none" } : { textDecoration: "underline", color: "#d0d0d0" }}>
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  style={
                    router.pathname === "/works"
                      ? { marginLeft: "12px", textDecoration: "none", color: "#7d7d7d", pointerEvents: "none" }
                      : { marginLeft: "12px", textDecoration: "underline", color: "#d0d0d0" }
                  }
                >
                  works
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  style={
                    router.pathname === "/posts"
                      ? { marginLeft: "12px", textDecoration: "none", color: "#7d7d7d", pointerEvents: "none" }
                      : { marginLeft: "12px", textDecoration: "underline", color: "#d0d0d0" }
                  }
                >
                  posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main style={{ minHeight: "calc(100vh - 65px - 60px)" }}>
        <motion.div initial="initial" animate="show" exit="exit" variants={variants2}>
          {children}
        </motion.div>
      </main>
    </>
  );
}
