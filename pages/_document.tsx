import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="antialiased max-w-4xl mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto mb-40">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
