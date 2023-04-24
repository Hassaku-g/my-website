import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Layout>
      <section style={{ padding: "60px 20px", backgroundColor: "black", color: "#d0d0d0" }}>
        <h1 style={{ fontSize: "40px", color: "#d0d0d0" }}>
          <Typewriter
            options={{
              strings: ["Hello World", "ようこそ"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p style={{ paddingTop: "40px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et voluptatum, ab inventore assumenda impedit, incidunt consectetur aut rem provident maiores fugiat sint quia corporis
          cupiditate tempore doloremque. Odio, dolor.
        </p>
      </section>
      <section style={{ padding: "60px 20px", backgroundColor: "black", color: "#d0d0d0" }}>
        <h1 style={{ fontSize: "40px", color: "#d0d0d0" }}>
          <Typewriter
            options={{
              strings: ["Hello World", "ようこそ"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p style={{ paddingTop: "40px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus et voluptatum, ab inventore assumenda impedit, incidunt consectetur aut rem provident maiores fugiat sint quia corporis
          cupiditate tempore doloremque. Odio, dolor.
        </p>
      </section>
    </Layout>
  );
}
