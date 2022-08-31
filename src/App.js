import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
