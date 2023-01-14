import { Link } from "react-router-dom";

export default function BlogList({blogs, title}){
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    {/* <span className="blog-id">{blog.id}</span> */}
                    <h3 className="blog-topic">{blog.topic}</h3>
                    <p className="blog-author">Written by {blog.author}</p>
                    <div className="button-container">
                        <div className="blog-view"><Link to={`/blogs/${blog.id}`}><button className='view-btn'><i class="fa fa-eye"/></button></Link></div>
                        <div className="blog-delete"><button className='delete-btn'><i class="fa fa-trash-can"/></button></div>
                    </div>
                </div>
            ))}
        </div>
    );
}