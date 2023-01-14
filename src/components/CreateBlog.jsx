import { useState } from "react";

export default function CreateBlog(){
    const [topic, setTopic] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sophia');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //prevent the page from reload on submit
        
        const blog = {topic, body, author};
        setIsLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false);
        })
    }

    return(
        <div className="blog-container">
            <h2>Create Blogs here ...</h2>
            <br/>
            <div className="blog-edit">
                <form className="blog-form" onSubmit={handleSubmit}>
                    <label>Blog Topic </label>
                    <input 
                        type="text" 
                        value={topic} 
                        required
                        onChange={(event)=>setTopic(event.target.value)}
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
                    { !isLoading ? <button className="add-blog">Add</button> : <button className="add-blog-disabled" disabled>Adding ...</button>}
                </form>
            </div>
            <div className="preview">
                <div className="blog-content">
                    <h1 className="blog-topic">{topic}</h1>
                    <p className="blog-author">Written by {author}</p>
                    <hr/>
                    <div><p className="blog-body">{body}</p></div>
                </div>
            </div>  
        </div> 
    );
}