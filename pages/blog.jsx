import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/blog";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function posts({ allPostsData }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`} scroll={false}>
              <p>{title}</p>
              <small>{date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
