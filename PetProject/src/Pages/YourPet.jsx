import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const YourPet = ({ yourPets, addYourPet }) => {
  const { id } = useParams();
  const navigate = useNavigate();


  console.log(yourPets);
  return (
    <div className='yourPets-page'>
      <h1>Your Pets</h1>
      <div className='main-container'>
        {yourPets.length === 0 ? (
          <h2 className='saved-flats-text'>
            Your Pets would go here, if you saved any
          </h2>
        ) : (
          yourPets.map((yourPet) => (
            <div key={yourPet.id}>
              <section className='pet-card'>
                <div className='picture-container'>
                  <img src={yourPet.url} alt='your-pet' />
                </div>
                <div className='info-container'>
                  <h3>My name is:{yourPet.name}</h3>
                  <p>I am {yourPet.age} years old</p>
                  <p>I am a {yourPet.species}</p>
                  <p>Color:{yourPet.color}</p>
                  <p>Breed: {yourPet.breed}</p>
                  <p>I have these qualities: I'm {yourPet.temperament}</p>
                  <p>Something about myself :{yourPet.description}</p>
                </div>
                <div className='btn-container'></div>
              </section>
              <div
                className='navigateToUpdate'
                onClick={() => navigate(`/updateYourPet/${yourPet.id}`)}
              >
                update profile
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YourPet;
