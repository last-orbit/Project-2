import React from 'react';
import { Navigate } from 'react-router-dom';

const FavoritePet = ({ favoritePets, addFavoritePet }) => {
  console.log(favoritePets);
  return (
    <div className='fav-page'>
      <h1>Favorite Pets</h1>
      <div className='main-container'>
        {favoritePets.length === 0 ? (
          <h2 className='saved-flats-text'>
            Saved Pets would go here, if you saved any
          </h2>
        ) : (
          favoritePets.map((favoritePet) => (
            <div key={favoritePet.id}>
              <section className='pet-card'>
                <div className='picture-container'>
                  <img src={favoritePet.url} alt="fav-pets" />
                </div>
                <div className='info-container'>
                  <h3>{favoritePet.name}</h3>
                  <p>{favoritePet.description}</p>
                </div>
                <div className='btn-container'></div>
              </section>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritePet;


