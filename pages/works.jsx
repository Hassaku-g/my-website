import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedWorksData } from "../lib/works";
import Layout from "@/components/layout";

export default function works({ allWorksData }) {
  return (
    <Layout>
      <h1>Works</h1>
      <ul>
        {allWorksData.map(({ id, date, title, image }) => (
          <li key={id}>
            <Link href={`/works/${id}`} style={{ display: "inline-block", width: "100%", border: "1px solid #efefef" }}>
              <div style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100%" }}>
                <Image src={image} alt="alt" width={400} height={200} priority />
              </div>
              <span>{title}</span>
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
