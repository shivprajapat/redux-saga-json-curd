import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { About, AddEditUser, Home, UserInfo } from './Pages';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/addUser' element={<AddEditUser />} />
          <Route path='/editUser/:id' element={<AddEditUser />} />
          <Route path='/userInfo/:id' element={<UserInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App