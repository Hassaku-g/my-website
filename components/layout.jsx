import Head from "next/head";
import Navbar from "./navbar";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-12">{children}</main>
    </>
  );
}
