import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Create from './components/CreateBlog';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
