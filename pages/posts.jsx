import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function posts({ allPostsData }) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <main className="mt-6">
          <section>
            <h1 className="font-bold text-3xl font-serif">Posts</h1>
            <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">ポートフォリサイトへようこそ！</p>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/posts/${id}`, undefined, { scroll: false });
                    }}
                    href={`/posts/${id}`}
                  >
                    <p>{title}</p>
                    <small>{date}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
