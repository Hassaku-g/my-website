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
        opacity: { duration: 0.6 },
        y: { duration: 0.4 },
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.6 },
        y: { duration: 0.4 },
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        ease: [0.165, 0.84, 0.44, 1],
        opacity: { duration: 0.4 },
        y: { duration: 0.6 },
      },
    },
  };

  return (
    <>
      <header style={{ position: "sticky", top: "0", zIndex: "100", width: "100%", borderBottom: "1px solid #efefef" }}>
        <div className="container" style={{ position: "relative", padding: "0 20px", backgroundColor: "white" }}>
          <div className="header-navigation-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
            <Link className="logo" href="/" scroll={false}>
              <Image src="/next.svg" alt="alt" width={100} height={40} priority />
            </Link>
            <button style={{ position: "relative", width: "40px", height: "40px", background: "transparent", border: "none" }} onClick={handle} className={`main-menu-toggle ${active ? "open" : ""}`}>
              <span style={{ position: "absolute", top: "13px", left: "10px", width: "20px", height: "1px", backgroundColor: "black" }}></span>
              <span style={{ position: "absolute", top: "20px", left: "10px", width: "20px", height: "1px", backgroundColor: "black" }}></span>
              <span style={{ position: "absolute", top: "27px", left: "10px", width: "20px", height: "1px", backgroundColor: "black" }}></span>
            </button>
          </div>
          <div className={`header-navigation-main ${active ? "open" : ""}`}>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" scroll={false} legacyBehavior>
                <a style={{ padding: "5px 20px", borderBottom: "1px solid #efefef", color: "#0070f3" }}>home</a>
              </Link>
              <Link href="/works" scroll={false} legacyBehavior>
                <a style={{ padding: "5px 20px", borderBottom: "1px solid #efefef", color: "#0070f3" }}>works</a>
              </Link>
              <Link href="/posts" scroll={false} legacyBehavior>
                <a style={{ padding: "5px 20px", color: "#0070f3" }}>posts</a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <motion.div initial="initial" animate="show" exit="exit" variants={variants} style={{ padding: "40px 20px" }}>
          {children}
        </motion.div>
      </main>
      <footer>f</footer>
    </>
  );
}