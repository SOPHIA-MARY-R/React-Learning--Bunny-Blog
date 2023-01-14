import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/"><h1>Bunny Blog</h1></Link>
            <div className="links">
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: 'dodgerblue',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}