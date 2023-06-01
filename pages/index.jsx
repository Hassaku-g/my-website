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
          <p className="my-6">はじめまして、三島大地と申します。 このサイトでは私について、手がけた作品、ブログを紹介しています。 ごゆっくりとご覧ください。</p>
          <table className="my-6">
            <thead>
              <tr>
                <th>Profile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="/docs/app/building-your-application/routing">なぜエンジニアになりたいのか？</a>
                </td>
                <td>
                  現職インハウスコーダーでウェブサイトのパフォーマンス向上を意識して業務をする中で、パフォーマンス工場には設計や構築が大切なことを知りました。
                  設計や構築について学習していく中で興味を持つようになり、フロントエンドエンジニアとして見た目や構築、設計に携わりたいと思うようになりました。
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/docs/app/building-your-application/data-fetching">How to learning</a>
                </td>
                <td>
                  Udemyの講座でWeb開発の基礎を学び、xxアプリを自分で実際に作りました。開発をする中で、共通のパーツを使っていないとその後の改善がしづらくなることを実感し、メンテナス性を意識しながら開発するようになりました。（制作物のURLも記述しておく）
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/docs/app/building-your-application/styling">Future</a>
                </td>
                <td>開発業務は未経験ですが、前職でBtoBの営業を担当してきた経験を活かして、顧客対応もできるエンジニアになりたいと考えています。</td>
              </tr>
            </tbody>
          </table>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Hassaku-g"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <div className="ml-3">GitHub</div>
            </div>
            <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
            </svg>
          </a>
        </section>
      </Layout>
    </>
  );
}
