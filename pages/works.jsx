import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import { getSortedWorksData } from "../lib/works";
import { useRouter } from "next/router";
import styles from "../styles/Works.module.scss";

export async function getStaticProps() {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
}

export default function works({ allWorksData }) {
  const router = useRouter();

  return (
    <Layout title="Works" sum={allWorksData.length}>
      <div className={styles.grid}>
        {allWorksData.map(({ id, title, date }) => (
          <article key={id}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                router.push(`/works/${id}`, undefined, { scroll: false });
              }}
              href={`/works/${id}`}
              className={styles.card_wrapper}
            >
              <div className={styles.card_image}>
                <Image src="/card-5.png" alt="alt" width="600" height="200" priority={true} />
              </div>
              <div>
                <p className={styles.card_title}>{title}</p>
                <span className={styles.card_by}>{date}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
