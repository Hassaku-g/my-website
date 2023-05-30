import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Posts({ posts }) {
  return (
    <Layout>
      <h1 className="text-white">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link className="flex flex-col space-y-1 mb-4" as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/posts/[slug]`}>
              <div className="w-full flex flex-col">
                <p className="text-white">{post.data.title}</p>
                <span className="text-sm text-neutral-500 tracking-tighter">{post.data.description}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
