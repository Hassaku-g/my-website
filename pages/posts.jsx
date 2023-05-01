import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@/components/layout";

export default function posts({ allPostsData }) {
  return (
    <Layout pageName="Posts">
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} style={{ padding: "20px 0", borderBottom: "1px solid #333" }}>
            <Link href={`/posts/${id}`}>
              <small style={{ display: "inline-block", paddingBottom: "10px", fontSize: "12px", color: "#7d7d7d" }}>{date}</small>
              <p style={{ paddingBottom: "10px", fontSize: "16px", color: "white" }}>{title}</p>
              <span style={{ fontSize: "12px", color: "white" }}>view more →</span>
            </Link>
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
