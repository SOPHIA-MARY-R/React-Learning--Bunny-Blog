import { useState, useEffect } from "react";
import BlogList from "./components/BlogList";

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
    }, []) //==> only fires at the initial render
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            {/* passing the blogs to blogList using props */}
        </div>
    );
}