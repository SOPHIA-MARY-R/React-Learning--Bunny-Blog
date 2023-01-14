import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h1>Bunny Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: 'dodgerblue',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}