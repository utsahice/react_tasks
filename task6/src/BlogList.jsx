import { Link } from 'react-router-dom';
import { blogPosts } from './data';

function BlogList() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
