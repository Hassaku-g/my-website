import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllWorkIds, getWorkData } from "../../lib/works";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id);

  return {
    props: {
      workData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Work({ workData }) {
  return (
    <Layout post title={workData.title}>
      <Head>
        <title>{workData.title}</title>
      </Head>
      {/* <Image
                src={workData.image}
                alt="alt"
                width="100"
                height="100"
            /> */}
      <a href={workData.url}>{workData.url}</a>
      <Date dateString={workData.date} />
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </Layout>
  );
}
