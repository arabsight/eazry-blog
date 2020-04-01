import React from 'react';
import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero></Hero>
      <Layout>
        <h1>Latest Posts!</h1>

        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
