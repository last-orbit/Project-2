import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AddPet from './Pages/AddPet';
import UpdatePet from './Pages/UpdatePet';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' />
        {/* <Route path='/profile/:id' /> */}
        <Route path='/addPet' element={<AddPet/>} />
        <Route path='/updatePet/:petId' element={<UpdatePet/> } />
        <Route path='*' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
