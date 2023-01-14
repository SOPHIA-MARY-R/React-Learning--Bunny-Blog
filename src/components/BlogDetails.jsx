import { useParams } from 'react-router-dom';

export default function BlogDetails(){
    const {id} = useParams();
    return (
        <div className="blog-details">
            <h1>BlogDetails - {id}</h1>
        </div>
    );
}