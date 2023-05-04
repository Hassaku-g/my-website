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
      <header className="header">
        <div className="header-inner">
          <div className="user-icon">{/* <Image src="/card-5.png" alt="Picture of the author" width="100" height="100" priority={true} /> */}</div>
          <p className="user-name">Daichi Mishima</p>
          <div className="user-comment">
            <p className="user-comment__copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <nav>
            {!post && (
              <ul className="nav-list">
                {paths.map((path, i) => (
                  <li className="nav-item" key={i}>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`${path}`, undefined, { scroll: false });
                      }}
                      href={`${path}`}
                      className={`nav-link ${router.pathname === path ? "is-active" : ""}`}
                    >
                      {i == 0 && "about"}
                      {i == 1 && "works"}
                      {i == 2 && "posts"}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {post && (
              <ul className="nav-list">
                {paths.map((path, i) => (
                  <li className="nav-item" key={i}>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`${path}`, undefined, { scroll: false });
                      }}
                      href={`${path}`}
                      className={`nav-link ${router.pathname.replace("/[id]", "") === path ? "is-active" : ""}`}
                    >
                      {i == 0 && "about"}
                      {i == 1 && "works"}
                      {i == 2 && "posts"}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </header>
      <motion.main className="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
        <article>
          {post && (
            <Link
              onClick={(e) => {
                e.preventDefault();
                router.push(`${router.pathname.replace("/[id]", "")}`, undefined, { scroll: false });
              }}
              href={`${router.pathname.replace("/[id]", "")}`}
            >
              ← Back to posts
            </Link>
          )}
          <section>
            <h1>{title}</h1>
          </section>
          {children}
        </article>
      </motion.main>
      <footer className="footer">
        <p className="footer-copy">
          <small>Copyright &copy; 2023 daichi mishima. All rights reserved.</small>
        </p>
      </footer>
    </>
  );
}
