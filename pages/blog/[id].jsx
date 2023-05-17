import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/blog";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Link className="inline-block mb-5 py-1 px-2 bg-neutral-800 rounded" href="/blog" scroll={false}>
        ← Back
      </Link>
      <h1 className="mb-5 text-3xl font-bold">{postData.title}</h1>
      <span>{postData.date}</span>
      <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
