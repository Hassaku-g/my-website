import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <section>
        <h1 className="text-white">About Me</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          はじめまして、私は未経験のエンジニアです。これまでの職務経験は、エンジニアリングには直接関係のない分野でしたが、常に技術に興味を持ち、学ぶことに熱心でした。そこで、自己学習によってプログラミングの基礎知識を身につけ、現在はWebアプリケーションの開発に興味を持っています。
        </p>
        <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <p>
            はじめまして、私は未経験のエンジニアです。これまでの職務経験は、エンジニアリングには直接関係のない分野でしたが、常に技術に興味を持ち、学ぶことに熱心でした。そこで、自己学習によってプログラミングの基礎知識を身につけ、現在はWebアプリケーションの開発に興味を持っています。
          </p>
          <hr />
          <p>
            はじめまして、私は未経験のエンジニアです。これまでの職務経験は、エンジニアリングには直接関係のない分野でしたが、常に技術に興味を持ち、学ぶことに熱心でした。そこで、自己学習によってプログラミングの基礎知識を身につけ、現在はWebアプリケーションの開発に興味を持っています。
          </p>
          <p>
            はじめまして、私は未経験のエンジニアです。これまでの職務経験は、エンジニアリングには直接関係のない分野でしたが、常に技術に興味を持ち、学ぶことに熱心でした。そこで、自己学習によってプログラミングの基礎知識を身につけ、現在はWebアプリケーションの開発に興味を持っています。
          </p>
          <p className="mb-8">
            はじめまして、私は未経験のエンジニアです。これまでの職務経験は、エンジニアリングには直接関係のない分野でしたが、常に技術に興味を持ち、学ぶことに熱心でした。そこで、自己学習によってプログラミングの基礎知識を身につけ、現在はWebアプリケーションの開発に興味を持っています。
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/leeerob"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                <svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <div className="ml-3">Twitter</div>
              </div>
              <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
              </svg>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/@leerob"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="800" width="800" viewBox="0 0 461.001 461.001" className="w-5 h-5" fill="currentColor">
                  <path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"></path>
                </svg>
                <div className="ml-3">YouTube</div>
              </div>
              <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
