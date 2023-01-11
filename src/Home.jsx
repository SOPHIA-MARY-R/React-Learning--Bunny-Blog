import { useState } from "react";
export default function Home(){
    const [blogs, setBlogs] = useState([
        {id: 1, topic: 'My summer experience', body: 'The summer was ...', author: 'sophia'},
        {id: 2, topic: 'School days', body: 'My school days were ...', author: 'maria'},
        {id: 3, topic: 'Rainy days', body: 'I love rain ...', author: 'sophie'}
    ]);
    return (
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <span className="blog-id">{blog.id}</span>
                    <h2 className="blog-topic">{blog.topic}</h2>
                    <h4>Written by {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button className="blog-view"><i class="fa fa-eye" aria-hidden="true"></i></button>
                </div>
            ))}
        </div>
    );
}