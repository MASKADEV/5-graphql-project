import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";

const posts = [
  { title: "MASKA blog1", excerpt: "lorem text for testing our components" },
  { title: "MASKA blog2", excerpt: "lorem text for testing our components" },
  { title: "MASKA blog3", excerpt: "lorem text for testing our components" },
  { title: "MASKA blog4", excerpt: "lorem text for testing our components" },
  { title: "MASKA blog5", excerpt: "lorem text for testing our components" },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>MASKA BLOG</title>
      </Head>
      <div className="grid grid-col-1 lg:grid-col-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: number) => (
            <PostCard title={post.title} excerpt={post.excerpt} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
