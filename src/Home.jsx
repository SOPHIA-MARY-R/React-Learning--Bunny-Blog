import useFetch from "./hooks/useFetch";
import BlogList from "./components/BlogList";

export default function Home(){
    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs/');
    // const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs/');
    return (
        <div className="home">
            { error && <div style={{color: 'red'}}>{error}</div> }
            { isLoading ? <div>Loading ...</div> : (data && <BlogList blogs={data} title="All blogs"/>) }
            {/* call BlogList only if blogs is not null*/}
        </div>
    );
}