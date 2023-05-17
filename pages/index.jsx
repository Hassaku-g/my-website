import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <Layout>
        <section>
          <h1 className="font-bold text-3xl">Mshima Daichi</h1>
          <p className="my-5 text-neutral-800 dark:text-neutral-200">
            はじめまして、私は未経験のエンジニアです。これまでの職務経験は、エンジニアリングには直接関係のない分野でしたが、常に技術に興味を持ち、学ぶことに熱心でした。そこで、自己学習によってプログラミングの基礎知識を身につけ、現在はWebアプリケーションの開発に興味を持っています。
          </p>
          <div></div>
          <p className="my-5 text-neutral-800 dark:text-neutral-200">
            具体的には、HTML,CSS,JavaScriptなどのプログラミング言語を学習しており、簡単なWebアプリケーションの作成に挑戦しています。また、オンラインのコミュニティや書籍などから学びを深めることも積極的に取り組んでいます。
          </p>
          <p className="my-5 text-neutral-800 dark:text-neutral-200">
            私はチャレンジ精神旺盛で、新しいことに取り組むことが大好きです。エンジニアリングの世界には、常に新しい技術や手法が生まれているため、この分野に身を置くことが将来的なキャリアアップにつながると考えています。これからも、日々医の学習に励みながら、エンジニアとして成長していきたいと思っています。
          </p>
          <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
            <li>
              <a href="" className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all">
                <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
                </svg>
                <p className="h-7">follow me on twitter</p>
              </a>
            </li>
            <li>
              <a href="" className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all">
                <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
                </svg>
                <p className="h-7">get email updates</p>
              </a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
