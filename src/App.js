import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import BlogDetails from './BlogDetails';
import About from './About';
import Create from './create'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/Create' element={<Create/>}/>
        <Route path="/blogs/:id" element={<BlogDetails />}/>
        <Route path="/About" element={<About/>}/>

      </Routes>  
      </div>
    </div>
  );
}

export default App;
