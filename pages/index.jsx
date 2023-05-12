import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <main className="mt-6">
          <section>
            <h1 className="font-bold text-3xl font-serif">Mishima Daichi</h1>
            <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">ポートフォリサイトへようこそ！</p>
            {/* <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
            <Image alt={name} className="rounded-full grayscale" src={avatar} placeholder="blur" width={100} priority />
            <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/leeerob" className="flex items-center gap-2">
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/leerob" className="flex items-center gap-2">
                <GitHubIcon />
                {`${starCount.toLocaleString()} stars on this repo`}
              </a>
              <Link href="/blog" className="flex items-center">
                <ViewsIcon />
                {`${views.toLocaleString()} blog views all time`}
              </Link>
            </div>
          </div> */}
            <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">bio</p>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <a className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all" rel="noopener noreferrer" target="_blank" href="https://twitter.com/leeerob">
                  {/* <ArrowIcon /> */}
                  <p className="h-7">follow me on twitter</p>
                </a>
              </li>
              <li>
                <a className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all" rel="noopener noreferrer" target="_blank" href="https://leerob.substack.com">
                  {/* <ArrowIcon /> */}
                  <p className="h-7">get email updates</p>
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
