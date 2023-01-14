import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function BlogDetails(){
    const { id } = useParams();
    const { data : blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            { error && <div style={{color: 'red'}}>{error}</div> }
            { isLoading ? <div>Loading ...</div> : (blog && (
                <div className="blog-content">
                    <h1 className="blog-topic">{blog.topic}</h1>
                    <p className="blog-author">Written by {blog.author}</p>
                    <hr/>
                    <div><p className="blog-body">{blog.body}</p></div>
                </div>
            )) }
        </div>
    );
}