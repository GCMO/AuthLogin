import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Loggedin from './pages/Loggedin';
// import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/Home'
              element={<Home />}
            />
            <Route 
              path='/' 
              element={<Login />} 
            />
            <Route
              path='/loggedin'
              element={<Loggedin />}
            />
            {/* <Route 
              path='/register' 
              element={<Register />} 
            /> */}
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
