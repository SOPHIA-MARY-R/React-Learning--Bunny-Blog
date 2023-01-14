export default function BlogList(props){
    // or export default function BlogList({blogs, title})
    return(
        <div className="blog-list">
            <h2>{props.title}</h2>
            {props.blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <span className="blog-id">{blog.id}</span>
                    <h2 className="blog-topic">{blog.topic}</h2>
                    <h4>Written by {blog.author}</h4>
                    {/* <p className="blog-body">{blog.body}</p> */}
                    <div className="button-container">
                        <div className="blog-view"><button className='view-btn'><i class="fa fa-eye"/></button></div>
                        <div className="blog-delete"><button className='delete-btn'><i class="fa fa-trash-can"/></button></div>
                    </div>
                </div>
            ))}
        </div>
    );
}