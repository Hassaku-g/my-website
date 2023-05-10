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
      <Navbar />
      <Layout title="Works" sum={allWorksData.length}>
        <div>
          {allWorksData.map(({ id, title, date }) => (
            <article key={id}>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/works/${id}`, undefined, { scroll: false });
                }}
                href={`/works/${id}`}
              >
                <div>
                  <Image src="/card-5.png" alt="alt" width="600" height="200" priority={true} />
                </div>
                <div>
                  <p>{title}</p>
                  <span>{date}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Layout>
    </>
  );
}
