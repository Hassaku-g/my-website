import Link from "next/link";
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
      <Link className="inline-block mb-5 py-1 px-2       text-sm text-neutral-400" href="/works" scroll={false}>
        ← Back to Works
      </Link>
      <div className="c">
        <div className="ca">
          <a className="cb" href={workData.url} rel="noopener" target="_blank">
            <svg
              data-testid="geist-icon"
              fill="none"
              height="20"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="20"
              style={{ color: "currentColor" }}
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
            <p className="cc">View Demo</p>
          </a>
        </div>
        {workData.image ? (
          <Image
            className="object-cover"
            style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }}
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
      <span className="mt-2 text-sm text-neutral-400">{workData.language}</span>
    </Layout>
  );
}
