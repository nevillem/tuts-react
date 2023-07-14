import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title="welcome to the new blog";
  const likes=50;
  const link="https://www.google.com";
  return (
    <div className="App">
    <div className="content">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
          {/* Error route */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

      <p>Liked{likes} times</p>
      <p>{Math.random()* 20}</p>
      <a href={link}>Google</a>
    </div>
    </div>
  );
}

export default App;
