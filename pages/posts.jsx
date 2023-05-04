import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { useRouter } from "next/router";
import styles from "../styles/Posts.module.scss";

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
    <Layout title="Posts">
      <div className={styles.list}>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.item} key={id}>
              <Link
                className={styles.post}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/posts/${id}`, undefined, { scroll: false });
                }}
                href={`/posts/${id}`}
              >
                <p className={styles.post_title}>{title}</p>
                <small className={styles.post_date}>{date}</small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
