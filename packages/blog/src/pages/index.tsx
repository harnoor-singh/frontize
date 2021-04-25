import MoreStories from "../components/more-stories";
import { LatestPost } from "../components/LatestPost";
import { Intro } from "../components/Intro";
import { Layout } from "../components/Layout";
import { getAllPosts, getHelloPost } from "../lib/api";
import Head from "next/head";
import { Container } from "../components/Container";
import { HelloPost } from "../components/HelloPost";
import { SectionSeparator } from "../components/SectionSeperator";
import { PostType } from "../types";

type Props = {
  allPosts: PostType[];
  helloPost: PostType;
};

const Index = ({ allPosts, helloPost }: Props) => {
  const latestPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Frontize weekly blog.</title>
        </Head>
        <div>
          <Intro />
          <Container className="m-10">
            <HelloPost {...helloPost} />
            <SectionSeparator />
            {latestPost && (
              <LatestPost
                title={latestPost.title}
                date={latestPost.date}
                author={latestPost.author}
                slug={latestPost.slug}
                excerpt={latestPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const helloPost = getHelloPost();

  return {
    props: { allPosts, helloPost },
  };
};
