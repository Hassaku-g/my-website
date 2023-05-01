import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedWorksData } from "../lib/works";
import Layout from "@/components/layout";

export default function works({ allWorksData }) {
  return (
    <Layout pageName="Works">
      <ul>
        {allWorksData.map(({ id, date, title, image }) => (
          <li key={id} style={{ marginBottom: "20px", backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "8px" }}>
            <Link href={`/works/${id}`} style={{ width: "100%", padding: "20px 0" }}>
              <div style={{ display: "flex", justifyContent: "center", alignContent: "center", height: "48vw", borderRadius: "6px", backgroundColor: "#1a1a1a", overflow: "hidden" }}>
                <Image src={image} alt="alt" width={600} height={400} priority />
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "13px", fontWeight: "700", color: "#fafafa" }}>ログイン作成</p>
                <span style={{ display: "flex", justifyContent: "flex-end", fontSize: "13px", color: "#a1a1aa" }}>view more →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
}
