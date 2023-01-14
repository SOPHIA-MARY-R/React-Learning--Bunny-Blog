import { useState } from "react";

export default function CreateBlog(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sophia');

    const handleSubmit = (e) => {
        e.preventDefault();
        //prevent the page from reload on submit
        const blog = {title, body, author};
        console.log(blog);
    }

    return(
        <div className="blog-container">
            <h2>Create Blogs here ...</h2>
            <br/>
            <div className="blog-edit">
                <form className="blog-form" onSubmit={handleSubmit}>
                    <label>Blog Title </label>
                    <input 
                        type="text" 
                        value={title} 
                        required
                        onChange={(event)=>setTitle(event.target.value)}
                    />

                    <label>Blog Author </label>
                    <select
                        value={author}
                        onChange={(event)=>setAuthor(event.target.value)}
                    >
                        <option value="sophia">sophia</option>
                        <option value="maria">maria</option>
                        <option value="jeeva">jeeva</option>
                    </select>

                    <label>Blog Body </label>
                    <textarea 
                        required
                        value={body}
                        onChange={(event)=>setBody(event.target.value)}
                    />
                    <button className="add-blog">Add</button>
                </form>
            </div>
            <div className="preview">
                <div className="blog-content">
                    <h1 className="blog-topic">{title}</h1>
                    <p className="blog-author">Written by {author}</p>
                    <hr/>
                    <div><p className="blog-body">{body}</p></div>
                </div>
            </div>  
        </div> 
    );
}