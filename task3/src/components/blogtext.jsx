import React from 'react';

const BlogPost = ({ title, content, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <button
        onClick={onDelete}
        className="mt-4 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default BlogPost;
