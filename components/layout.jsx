import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Layout({ children }) {
  const [active, setActive] = useState(false);

  function handle() {
    setActive(!active);
  }

  const variants = {
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
      <header style={{ position: "sticky", top: "0", zIndex: "100", width: "100%", height: "60px", background: "black" }}>
        <div
          className="header-inner"
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "60px 20px 0",
          }}
        >
          <h1 style={{ fontSize: "30px", color: "#d0d0d0", filter: "drop-shadow(0 0 0.3rem #ffffff70)" }}>About</h1>
          <nav>
            <ul style={{ display: "flex", justifyContent: "end", alignItems: "center", paddingTop: "10px" }}>
              <li>
                <Link href="/" style={{ fontSize: "13px", color: "#d0d0d0", textDecoration: "underline" }}>
                  about
                </Link>
              </li>
              <li>
                <Link href="/works" style={{ marginLeft: "20px", fontSize: "13px", color: "#d0d0d0", textDecoration: "underline" }}>
                  works
                </Link>
              </li>
              <li>
                <Link href="/posts" style={{ marginLeft: "20px", fontSize: "13px", color: "#d0d0d0", textDecoration: "underline" }}>
                  posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main style={{ minHeight: "calc(100vh - 65px - 60px)" }}>
        <motion.div initial="initial" animate="show" exit="exit" variants={variants}>
          {children}
        </motion.div>
      </main>
      <footer style={{ display: "flex", alignItems: "center", height: "60px", borderTop: "1px solid #efefef", backgroundColor: "white" }}>
        <p style={{ padding: "0 20px" }}>
          <small style={{ fontSize: "11px", color: "#888" }}>2023 &copy; daichi mishima</small>
        </p>
      </footer>
    </>
  );
}
