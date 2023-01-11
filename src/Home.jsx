import { useState } from "react";
import BlogList from "./components/BlogList";

export default function Home(){
    const [blogs, setBlogs] = useState([
        {id: 1, topic: 'My summer experience', body: 'The summer was ...', author: 'sophia'},
        {id: 2, topic: 'School days', body: 'My school days were ...', author: 'maria'},
        {id: 3, topic: 'Rainy days', body: 'I love rain ...', author: 'sophia'}
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
            {/* passing the blogs to blogList using props */}
            <BlogList blogs={blogs.filter((blog)=> (blog.author === 'sophia'))} title="Sophia's blogs"/>
            {/* filter only sophia's blogs */}
        </div>
    );
}