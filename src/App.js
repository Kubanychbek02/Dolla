import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages';
import Signin from './components/Signin/Signin';

function App() {
  return (
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
  );
}

export default App;

// <Router>
    //   <Home/>
    // </Router>