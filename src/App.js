import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
    <div className='App'>
    <Navbar /> 
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/login" element = {<Login />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
