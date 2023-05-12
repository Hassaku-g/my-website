import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import { getSortedWorksData } from "../lib/works";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export async function getStaticProps() {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
}

export default function works({ allWorksData }) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <main className="mt-6">
          <section>
            <h1 className="font-bold text-3xl font-serif">Works</h1>
            {allWorksData.map(({ id, title, date }) => (
              <article key={id}>
                <Link href={`/works/${id}`} scroll={false} style={{ display: "inline-block", marginBottom: "40px" }}>
                  <div>
                    <Image src="/card-5.png" alt="alt" width="600" height="200" priority={true} />
                  </div>
                  <div>
                    <p style={{ paddingTop: "10px", fontSize: "13px", color: "AppWorkspace" }}>{title}</p>
                  </div>
                </Link>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
