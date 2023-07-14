import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const {data:blog, error, isPending}=useFetch('http://localhost:8000/blogs/'+id);
  const history = useNavigate();

  const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        console.log('blog deleted');
       history('/');
      })
  }
  return (
    <div className="blog-details">
        {error && <div> {error}</div>}
        {isPending && <div> Loading... </div>}
        {blog && <article> <h2>{blog.title}</h2>
        <p>{blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
        </article>}
     </div>
  );
}
 
export default BlogDetails;