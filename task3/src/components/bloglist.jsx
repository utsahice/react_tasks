import React, { useState } from 'react';
import BlogPost from './blogtext';

const initialPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the Third post.' },
  { id: 4, title: 'Fourth Blog Post', content: 'This is the content of the Fourth post.' },
  { id: 5, title: 'Fifth Blog Post', content: 'This is the content of the Fifth post.' },
];

const BlogPostList = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        posts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            content={post.content}
            onDelete={() =>{ handleDelete(post.id); alert("Deleted"); }}
          />
        ))  
      )}
    </div>
  );
};

export default BlogPostList;
