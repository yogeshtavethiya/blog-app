import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/blogs" element={ <Blogs/> } />
      </Routes>
    </div>
  );
}

export default App;
