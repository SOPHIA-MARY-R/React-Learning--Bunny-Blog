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
    const [blogs, setBlogs] = useState([
        {id: 1, topic: 'My summer experience', body: 'The summer was ...', author: 'sophia'},
        {id: 2, topic: 'School days', body: 'My school days were ...', author: 'maria'},
        {id: 3, topic: 'Rainy days', body: 'I love rain ...', author: 'sophia'}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>(blog.id !== id));
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('use effect fired')
    }, [blogs]) //dependency array ==> [dependency_name], so useEffect is fired whenever there is a change in blogs
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            {/* passing the blogs to blogList using props */}
        </div>
    );
}