import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <Layout pageName="About">
      <p style={{ lineHeight: "1.5" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laboriosam! Laudantium, ex culpa repellat optio dolor expedita explicabo vel? Sed ipsa impedit et praesentium recusandae
        consequuntur distinctio temporibus minus omnis!
      </p>
    </Layout>
  );
}
