import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Work() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{`works - ${id}`}</title>
      </Head>
      <main>
        <p>{`this page is ${id}`}</p>
        <Link href="/works">← back to works</Link>
      </main>
    </>
  );
}
