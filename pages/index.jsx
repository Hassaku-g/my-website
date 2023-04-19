import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>Hello World</h1>
      <p>Hey, I'm a Senior Software Engineer at Company. I enjoy working with Next.js and crafting beautiful front-end experiences.</p>
      <p>This portfolio is built with Next.js and a library called Nextra. It allows you to write Markdown and focus on the content of your portfolio.</p>
      <p>Deploy your own in a few minutes.</p>
    </Layout>
  );
}
