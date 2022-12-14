import './App.css';

function App() {
  return (
    //JSX code -> allows HTML style in JS
    //as class is a reserved in JS, class keyword is not used below
    //instead, className is used, which will be converted to 'class' in HTML
    //inspect and see the page to notice the change
    <div className='App'>
      <div className='content'>
        <h1> App component </h1>
      </div>
    </div>
  );
}

export default App; //always export the component to use it in other files
