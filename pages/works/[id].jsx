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
      <Link className="inline-block mb-5 py-1 px-2 bg-neutral-800 rounded" href="/works" scroll={false}>
        ← Back
      </Link>
      <h1 className="mb-5 text-3xl font-bold">{workData.title}</h1>
      {workData.src ? <Image src={workData.src} alt={workData.title} width={500} height={400} priority /> : null}
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      <span className="mt-2 text-sm text-neutral-400">{workData.language}</span>
    </Layout>
  );
}
