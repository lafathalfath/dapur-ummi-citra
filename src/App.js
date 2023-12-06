import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Menus from './pages/Menus';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/menus' element={<Menus/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
