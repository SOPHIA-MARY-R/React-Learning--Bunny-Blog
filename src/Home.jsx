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
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if(!res.ok){ //if response object status is not ok, throw an exception
                    throw Error('Oops! Could not fetch data from that resource. Please check if the resource exists.');
                    //for example, trying to fetch from 'http://localhost:8000/blogss' which does not exist
                }
                return res.json();
            })
            .then((data)=>{
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            //catch the error while connecting to JSON server
            .catch((err)=>{
                setError(err.message);
                setIsLoading(false);
            })
        }, 1000) //set a timeout for 1s to show Loading ...
    }, [])
    return (
        <div className="home">
            { error && <div style={{color: 'red'}}>{error}</div>}
            {isLoading ? <div>Loading ...</div> : (blogs && <BlogList blogs={blogs} title="All blogs"/>)}
            {/* call BlogList only if blogs is not null*/}
        </div>
    );
}