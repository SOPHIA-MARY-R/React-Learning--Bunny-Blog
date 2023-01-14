import { useState, useEffect } from "react";
import BlogList from "./components/BlogList";

//JSON Server sets up a fake API
//to run json-server, go to terminal & type:
//npx json-server --watch data/db.json --port 8000

//End points:
/*

 http://localhost:8000//blogs             GET         Fetch all blogs
 http://localhost:8000//blogs/{id}        GET         Fetch single blog
 http://localhost:8000//blogs             POST        Add a new blog
 http://localhost:8000//blogs/{id}        DELETE      Delete a blog

*/

export default function Home(){
    const [blogs, setBlogs] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                setBlogs(data)
            });
    }, [])
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            {/* call BlogList only if blogs is not null */}
        </div>
    );
}