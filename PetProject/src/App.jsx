import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AddPet from './Pages/AddPet';
import UpdatePet from './Pages/UpdatePet';
import Detailspage from './Pages/Detailspage';
import NotFound from './Pages/NotFound';
import SavedPets from './Pages/SavedPets';
import YourPet from './Pages/YourPet';

function App() {
  const [favoritePets, setFavoritePets] = useState([]);
  const [yourPets, setYourPets] = useState([]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/favorites'
          element={<SavedPets favoritePets={favoritePets} />}
        />
        <Route path='/addPet' element={<AddPet />} />
        <Route path='/updatePet/:petId' element={<UpdatePet />} />
        <Route
          path='/profile/:id'
          element={
            <Detailspage yourPets={yourPets} setYourPets={setYourPets} />
          }
        />
        <Route path='/yourPets' element={<YourPet />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
