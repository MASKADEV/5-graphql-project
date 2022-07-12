import type { NextPage } from "next";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../../services";

const Home: NextPage = ({ posts }: any) => {
  // console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: number) => (
            <PostCard
              slug={post.node.slug}
              title={post.node.title}
              image={post.node.featuredimage.url}
              excerpt={post.node.excerpt}
              key={index}
              photo={""}
              author={post.node.author}
              createdAt={post.node.createdAt}
            />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
