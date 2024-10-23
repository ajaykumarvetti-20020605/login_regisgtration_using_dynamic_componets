// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  const appcs = {
    textAlign:'center',
    border:'1px solid red',
    backgroundColor:'yellow',
    margin:"200px 600px",
    padding:"30px 0px",
    borderRadius: '8px'
    
    
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={appcs}>
        <Routes>
          {/* Use element prop and pass components as JSX elements */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<h2>Welcome! Please login or register.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
