export default function Navbar(){
    return (
        <nav className="navbar">
            <h1>Bunny Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: 'dodgerblue',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}