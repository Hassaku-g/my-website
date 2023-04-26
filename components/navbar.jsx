import Link from "next/link";

export default function navbar() {
  return (
    <>
      <Link href="/">about</Link>
      <Link href="/works">works</Link>
      <Link href="/posts">posts</Link>
    </>
  );
}
