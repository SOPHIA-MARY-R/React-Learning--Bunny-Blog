const Home = () => {
    //The first parameter is a default parameter -> event object
    /*
    const handleClick = (e) => {
        console.log(e);
    }
    */
    const handleClick = () => {
        console.log('Hello coders!');
    }
    const handleClickWithParam = (name) => {
        console.log('Hello ' + name);
    }
    {/*
    const handleClickWithParam = (name, e) => {
        console.log('Hello ' + name, e.target);
    }
    */}
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Button</button>
            <button onClick={() => {
                handleClickWithParam('Sophie!')
            }}>Name Button</button>
            {/*
                <button onClick={(e) => handleClickWithParam('Sophie!', e)}>Name Button</button>
            */}
        </div>
    );
}
 
export default Home;