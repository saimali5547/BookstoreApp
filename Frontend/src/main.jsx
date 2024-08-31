
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Course/Courses'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Signup from './components/Signup'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />\
      <Route path='/Signup' element={<Signup />} />
    </Routes>
  </BrowserRouter>
  
  

)
