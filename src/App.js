import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Master from './Components/Layout/Master';

import About from './Components/About';
import Contact from './Components/Layout/Contact';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';

import Blogs from './Components/Blog';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          
         
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
