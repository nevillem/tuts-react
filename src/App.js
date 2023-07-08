import Navbar from './navbar';
import Home from './Home';

function App() {
  // const title="welcome to the new blog";
  const likes=50;
  const link="https://www.google.com";
  return (
    <div className="App">
      <Navbar></Navbar>
    <div className="content">
      <Home></Home>

      <p>Liked{likes} times</p>
      <p>{Math.random()* 20}</p>
      <a href={link}>Google</a>
    </div>
    </div>
  );
}

export default App;
