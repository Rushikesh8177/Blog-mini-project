import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Componet/Navbar'
import Dasbord from './Pages/Dasbord'
import BlogDeatil from './Pages/BlogDeatil'
import AddBlog from './Pages/AddBlog'
import UpdateBlog from './Pages/UpdateBlog'
import BlogDetail from './Pages/BlogDeatil';

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dasbord />} />
        <Route path='/:ID' element={<BlogDetail />} />
        <Route path='/create' element={<AddBlog />} />
        <Route path='/update/:ID' element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
