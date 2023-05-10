import Head from "next/head";
import Layout from "../components/layout";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout>
        <section>
          <p>
            ○○大学文学部、英文学科から参りました、○○と申します。私は昔から読書が好きで、読書好きが高じて文学部への入学を決めました。現在は外国文学の古典について学んでおり、語学力はもちろん、日本人にはない考え方、価値観、文化の違いなどを学び、日々驚きと楽しみでいっぱいです。
            面接では、これまでに学んだことはだけではなく、学びによってどんな成長があったのかも伝えていきたいと思います。本日は、よろしくお願い致します。
          </p>
        </section>
        <section>
          <ul>
            <li>
              <a href="#">Github Account ↗</a>
            </li>
            <li>
              <a href="#">Gmail Address ↗</a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
