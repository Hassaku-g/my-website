import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
      <header style={{ position: "sticky", top: "0", zIndex: "100", width: "100%", borderBottom: "1px solid #efefef" }}>
        <div className="container" style={{ position: "relative", padding: "0 20px", backgroundColor: "white" }}>
          <div className="header-navigation-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
            <Link className="logo" href="/" scroll={false}>
              <Image src="/logo.svg" alt="alt" width={30} height={30} priority style={{ fill: "blue" }} />
            </Link>
            <button style={{ position: "relative", width: "40px", height: "40px", background: "transparent", border: "none" }} onClick={handle} className={`main-menu-toggle ${active ? "open" : ""}`}>
              <span style={{ position: "absolute", top: "13px", left: "10px", width: "20px", height: "1px", backgroundColor: "black" }}></span>
              <span style={{ position: "absolute", top: "20px", left: "10px", width: "20px", height: "1px", backgroundColor: "black" }}></span>
              <span style={{ position: "absolute", top: "27px", left: "10px", width: "20px", height: "1px", backgroundColor: "black" }}></span>
            </button>
          </div>
          <div className={`header-navigation-main ${active ? "open" : ""}`}>
            <nav style={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
              <Link href="/" scroll={false} legacyBehavior>
                <a onClick={handle} style={{ padding: "10px 40px", borderBottom: "1px solid #efefef", color: "black" }}>
                  home
                </a>
              </Link>
              <Link href="/works" scroll={false} legacyBehavior>
                <a onClick={handle} style={{ padding: "10px 40px", borderBottom: "1px solid #efefef", color: "black" }}>
                  works
                </a>
              </Link>
              <Link href="/posts" scroll={false} legacyBehavior>
                <a onClick={handle} style={{ padding: "10px 40px", color: "black" }}>
                  posts
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main style={{ minHeight: "calc(100vh - 65px - 60px)" }}>
        <motion.div initial="initial" animate="show" exit="exit" variants={variants} style={{ padding: "40px 20px" }}>
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
