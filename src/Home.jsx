const Home = () => {
    let name = 'Sophie';
    const handleClick = () => {
        name = 'Maria';
    }
    return (
        <div className="home">
            <p>Hello { name }!</p>
            <button onClick={handleClick}>Button</button>
        </div>
    );
}
 
export default Home;