import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' />
        {/* <Route path='/profile/:id' /> */}
        <Route path='/addPet' />
        <Route path='/updatePet' />
        <Route path='*' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
