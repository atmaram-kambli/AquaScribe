import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Controls from './pages/Controls/Controls';
// import Contact from './pages/Contact/Contact';
import AboutTeam from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/controls' element={<Controls />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/team' element={<AboutTeam />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
