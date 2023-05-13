import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="max-w-4xl bg-black mx-4 lg:mx-auto mt-8 mb-10 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
