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
          <li key={id} style={{ borderBottom: "1px solid #1a1a1a" }}>
            <Link href={`/works/${id}`} style={{ display: "flex", width: "100%", padding: "20px 0" }}>
              <div style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100px", height: "100px", borderRadius: "6px", backgroundColor: "#1a1a1a", overflow: "hidden" }}>
                {/* <Image src={image} alt="alt" width={600} height={400} priority /> */}
              </div>
              <div style={{ width: "calc(100% - 120px)", marginLeft: "20px", padding: "10px 0" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#d0d0d0" }}>{title}</p>
                <span style={{ display: "block", marginTop: "20px", fontSize: "12px", color: "#a0a0a0", textAlign: "right" }}>詳しく見る</span>
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
