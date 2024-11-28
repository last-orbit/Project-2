import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Detailspage = ({addFavoritePet}) => {
  const [cat, setCat] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5005/pets/${id}`)
      .then(response => setCat(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='main-container'>
      {cat && (
        <div className='pet-details'>
          <img src={cat.url} />
          <div className='details-info-container'>
            <h1>Get to know "{cat.name}" *raawwrrrr*</h1>
            <div className='details-temperament'>I'm {cat.temperament}</div>
            <div className='details-description'>{cat.description}</div>
            <div>
              <div
                className='navigateToUpdate'
                onClick={() => navigate(`/updatePet/${id}`)}
              >
                update profile
              </div>
              <button onClick={()=> addFavoritePet(cat.id)}>Heart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detailspage;