import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <Layout>
        <section>
          <h1 className="font-bold text-3xl">Mshima Daichi</h1>
          <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
            Hey, I'm Lee. I'm the <b>VP of Developer Experience at Vercel</b> where my team helps developers build a faster web.
          </p>
          <div></div>
          <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
            I'm a Next.js contributor and help lead our open-source communities. I'm passionate about frontend development and have created courses on React, Next.js, and web development. I'm an
            advisor and investor in early stage startups.
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
