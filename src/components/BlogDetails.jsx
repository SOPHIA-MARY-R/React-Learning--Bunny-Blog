import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function BlogDetails(){
    const { id } = useParams();
    const { data : blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        }).then(()=>{
            
        })
    }

    return (
        <div className="blog-details">
            { error && <div style={{color: 'red'}}>{error}</div> }
            { isLoading ? <div>Loading ...</div> : (blog && (
                <div className="blog-content">
                    <h1 className="blog-topic">{blog.topic}</h1>
                    <p className="blog-author">Written by {blog.author}</p>
                    <hr/>
                    <div><p className="blog-body">{blog.body}</p></div>
                    <div className="button-container">
                        <div className="blog-delete" onClick={()=>handleDelete()}><button className='delete-btn'><i class="fa fa-trash-can"/></button></div>
                    </div>
                </div>
            )) }
        </div>
    );
}