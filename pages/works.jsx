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
      <div className="sm:grid-cols-3 gap-6 grid">
        {allWorksData.map(({ id, title, image, url, description, type }) => (
          <div key={id}>
            <Link href={`/works/${id}`} style={{ boxShadow: "0 0 0 1px #3d3d3d" }} className="flex justify-between flex-col max-w-xs h-full	mx-auto border-neutral-800 rounded overflow-hidden">
              <div style={{ height: "180px" }} className="flex bg-neutral-900">
                {image ? <Image style={{ inset: "0px" }} className="object-cover" src={image} alt="alt" width={500} height={400} priority /> : null}
              </div>
              <div className="flex justify-between flex-col p-4">
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  <p className="card-description mt-2 text-sm text-neutral-400">{description}</p>
                </div>
                <div className="flex justify-between align-center mt-3.5">
                  <p className=" text-sm text-neutral-400">{type}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(url, "_ blank");
                    }}
                  >
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="20"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="20"
                      style={{ color: "currentColor" }}
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
