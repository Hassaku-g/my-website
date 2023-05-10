import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function posts({ allPostsData }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Layout title="Posts">
        <div>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/posts/${id}`, undefined, { scroll: false });
                  }}
                  href={`/posts/${id}`}
                >
                  <p>{title}</p>
                  <small>{date}</small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
