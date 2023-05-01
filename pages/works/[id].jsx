import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllWorkIds, getWorkData } from "../../lib/works";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
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
    <Layout pageName={workData.title} work>
      <Head>
        <title>{workData.title}</title>
      </Head>
      <div>
        <Image src={workData.image} alt="alt" width={400} height={200} priority style={{ width: "100%" }} />
      </div>
      {workData.title}
      <br />
      <Date dateString={workData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      <Link href="/works">←back to works</Link>
    </Layout>
  );
}
