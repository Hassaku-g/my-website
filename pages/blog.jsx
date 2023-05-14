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
      {allPostsData.map(({ id, date, title }) => (
        <Link className="flex flex-col space-y-1 mb-4" href={`/blog/${id}`} scroll={false} key={id}>
          <div className="w-full flex flex-col">
            <p>{title}</p>
            <span className="font-mono text-sm text-neutral-500 tracking-tighter">{date}</span>
          </div>
        </Link>
      ))}
    </Layout>
  );
}
