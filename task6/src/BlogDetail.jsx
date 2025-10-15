import { useParams } from 'react-router-dom';
import { blogPosts } from './data';

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) return <h2>Blog not found!</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogDetail;
