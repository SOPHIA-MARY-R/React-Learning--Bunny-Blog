export default function BlogList(props){
    // const blogs=props.blogs;
    // const title=props.title;
    // or export default function BlogList({blogs, title})
    return(
        <div className="blog-list">
            <h2>{props.title}</h2>
            {props.blogs.map((blog)=>(
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