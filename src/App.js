import './App.css';

function App() {
  //create as many variables before returning the component
  const title = 'Welcome to Bunny Blog!';
  const likes = 50; //passing dynamic values to JSX code
  const link = 'https://www.google.com/';

  return (
    //JSX code -> allows HTML style in JS
    //as class is a reserved in JS, class keyword is not used below
    //instead, className is used, which will be converted to 'class' in HTML
    //inspect and see the page to notice the change

    <div className='App'>
      <div className='content'>
        <h1> { title } </h1> 
        {/* rendering dynamic value */}
        <p> Liked { likes } times</p>

        {/* passing javascript values */}
        <p>{ 10 }</p>
        <p>{ "Hello Sophie!" }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random()*10 }</p>

        <a href={ link }> Google </a>
      </div>
    </div>
  );
}

export default App; //always export the component to use it in other files
