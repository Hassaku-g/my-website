import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section style={{ padding: "60px 20px", backgroundColor: "black", color: "#d0d0d0" }}>
        <h1 style={{ fontSize: "40px", color: "#d0d0d0", filter: "drop-shadow(0 0 0.3rem #ffffff70)" }}>a</h1>
        <p style={{ paddingTop: "40px" }}>はじめてして、私の名前はエンジニアを目指しています。</p>
      </section>
    </Layout>
  );
}
