import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@/components/layout";

export default function posts({ allPostsData }) {
  return (
    <Layout pageName="Posts">
      <h1>Posts</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
