import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllWorkIds, getWorkData } from "../../lib/works";

// getStaticProps関数を呼び出すとpropsによって返された値を使用して事前にページを生成します。
// この関数はpropsオブジェクトのworkDataを返します。
export async function getStaticProps({ params }) {
  // importしたgetWorkData関数をworkDataに格納
  const workData = await getWorkData(params.id);

  return {
    props: {
      workData,
    },
  };
}

// 動的ルートを使用するページからgetStaticPathsをエクスポートすると該当するすべてのパスを事前にレンダリングします。
export async function getStaticPaths() {
  // importしたgetAllWorksIds関数をpathsに格納
  const paths = getAllWorkIds();

  // paths,fallbackオブジェクトを返す
  return {
    paths,
    fallback: false,
  };
}

export default function Work({ workData }) {
  return (
    <Layout>
      <Head>
        <title>{workData.title} | Portfolio</title>
      </Head>
      <Link className="inline-block mb-5 py-1 px-2 bg-neutral-800 rounded" href="/works" scroll={false}>
        ← Back
      </Link>
      <div className="c">
        <div className="flex flex-wrap items-end absolute bottom-0 z-10 w-full h-full p-2.5 md:p-5 bg-neutral-900/10">
          <a className="cb mr-2.5 text-xs md:text-sm" href={workData.url} rel="noopener" target="_blank">
            <svg
              className="w-4 md:w-5 h-4 md:h-5"
              data-testid="geist-icon"
              fill="none"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              style={{ color: "currentColor" }}
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
            <p className="cc">デモを見る</p>
          </a>
          <a className="cb mr-2.5 text-xs md:text-sm" href={workData.code} rel="noopener" target="_blank">
            <svg
              className="w-4 md:w-5 h-4 md:h-5"
              data-testid="geist-icon"
              fill="none"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              style={{ color: "currentColor" }}
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
            <p className="cc">コードを見る</p>
          </a>
        </div>
        {workData.image ? (
          <Image
            className="object-cover"
            style={{ height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }}
            src={workData.image}
            alt={workData.title}
            width={640}
            height={360}
            priority
          />
        ) : null}
      </div>
      <h1 className="my-5 text-white">{workData.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </Layout>
  );
}
