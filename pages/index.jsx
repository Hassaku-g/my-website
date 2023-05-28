import Image from "next/image";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <Layout>
        <section>
          <h1 className="text-white">Mshima Daichi</h1>
          <div className="w-24 h-24 bg-neutral-900 rounded-full overflow-hidden">
            <Image src="/portfolio.jpg" alt="Mishima Daichi" width={200} height={200} priority />
          </div>
          <p className="my-6">はじめまして、三島大地と申します。 このサイトでは私の経歴、手がけた作品、ブログを紹介しています。 ごゆっくりとご覧ください。</p>
          <p className="my-6">
            私はウェブ制作のスキルを身に付け、2021年9月に異業種からコーダーに転職しました。 学習を始めた時からウェブの技術に興味を持つようになり、積極的にスキルの習得に励んでいます。
            最近ではフロントエンド技術の学習に取り組んでおります。 ウェブの構築が好きで、ゼロから作り上げたときには毎回感動を覚えます。
          </p>
          <p className="my-6">
            私はチャレンジ精神旺盛で、新しいことに取り組むことが大好きです。エンジニアリングの世界には、常に新しい技術や手法が生まれているため、この分野に身を置くことが将来的なキャリアアップにつながると考えています。これからも、日々医の学習に励みながら、エンジニアとして成長していきたいと思っています。
          </p>
          <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
            <li>
              <a href="https://github.com/Hassaku-g" target="_blank" className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all">
                <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
                </svg>
                <p className="h-7">Github Account</p>
              </a>
            </li>
            {/* <li>
              <a href="" className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all">
                <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
                </svg>
                <p className="h-7">get email updates</p>
              </a>
            </li> */}
          </ul>
        </section>
      </Layout>
    </>
  );
}
