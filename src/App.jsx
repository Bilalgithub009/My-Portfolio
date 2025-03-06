import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import About from './component/About';
import Project from './component/Project';
import Skills from './component/Skills';
import Service from './component/Service';
import Contact from './component/Contact';
import Footer from './component/Footer';





function App() {
  return(
     <>
      
     <Navbar/>
     <About/>
     <Skills/>
     <Project/>
     <Service/>
     <Contact/>
     <Footer/>
     


   
    </>
  )
}

export default App
