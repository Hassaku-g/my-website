import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import { getSortedWorksData } from "../lib/works";

// getStaticProps関数を呼び出すとpropsによって返された値を使用して事前にページを生成します。
// この関数はpropsオブジェクトのallWorksDataを返します。
export async function getStaticProps() {
  // importしたgetSortedWorksData関数をallWorksDataに格納
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
}

export default function Works({ allWorksData }) {
  return (
    <Layout>
      <h1>Works</h1>
      <div className="sm:grid-cols-2 gap-2.5 grid">
        {allWorksData.map(({ id, title, date, src }) => (
          <article key={id}>
            <Link href={`/works/${id}`} className="flex max-w-xs flex-col	mx-auto">
              <div className="flex align-center justify-center w-full h-56 border border-neutral-800 rounded bg-neutral-900 overflow-hidden">
                {src ? <Image className="object-cover" src={src} alt="alt" width={500} height={400} priority /> : null}
              </div>
              <div>
                <div>
                  <h3>{title}</h3>
                  <div
                    className="card"
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "-.01em",
                      display: "-webkit-box",
                      overflow: "hidden",
                      marginTop: "8px",
                    }}
                  >
                    Simple, powerful and flexible markdown-powered docs site. Built with Next.js.
                  </div>
                </div>
                <div>
                  <p className="mt-2 text-sm text-neutral-400">{title}</p>
                  <button></button>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
