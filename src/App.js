import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-[#eff0f3]">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
