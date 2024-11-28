import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const YourPet = ({ yourPets, setYourPets }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchYourPets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/yourPets/${id}`
        );
        setYourPets(response.data);
      } catch (error) {
        console.error('Error fetching pet:', error);
      }
    };

    fetchYourPets();
  }, [id]);

  async function handleDeletePet(petId) {
    console.log('deleted: ', petId);
    try {
      const { data } = await axios.delete(
        `http://localhost:5005/yourPets/${petId}`
      );

      // Update the youPets state after deletion
      setYourPets(yourPets.filter((pet) => pet.id !== petId));
      //   alert('Pet Deleted 😿');
    } catch (error) {
      console.log(error);
    }
  }

  console.log(yourPets);
  if (!yourPets) return <p>Loading...</p>;
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
                  <img  className="pet-pic" src={yourPet.url} alt='your-pet' />
                </div>
                <div className='petinfo-container'>
                  <h3>My name is:{yourPet.name}</h3>
                  <p>I am {yourPet.age} years old</p>
                  <p>I am a {yourPet.species}</p>
                  <p>Color:{yourPet.color}</p>
                  <p>Breed: {yourPet.breed}</p>
                  <p>I have these qualities: I'm {yourPet.temperament}</p>
                  <p>Something about myself :{yourPet.description}</p>
                </div>
                <div>
                  <button
                    className='addPet-button'
                    onClick={() => navigate(`/updateYourPet/${yourPet.id}`)}
                  >
                    Update Your Pet
                  </button>
                  <button
                    className='addPet-button delete-button'
                    onClick={() => handleDeletePet(yourPet.id)}
                  >
                    Delete Your Pet
                  </button>
                </div>
              </section>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YourPet;
