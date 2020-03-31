import React from 'react';
import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Latest Posts!</h1>

      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
