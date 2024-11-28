import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import rawr from '../assets/rawr.gif';
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
    <div className='main-container'>{cat && (
      <div className='pet-details'>
        <img src={cat.url} />
        <div className='details-info-container'>
          <div id='rawr-container'>
            <img src={rawr} className='rawr-gif' />
            <h1 className='h1-centered'>*RAWWRRRR*</h1>
            <img src={rawr} className='rawr-gif' />
          </div>
          <h1 className='h1-centered'>Get to know "{cat.name}"</h1>
          <h4><b>Characteristics:</b></h4>
          <div className='details-temperament'>{cat.temperament}</div>
          <h4><b>Trivia:</b></h4>
          <div className='details-description'>{cat.description}</div>

          <div className='navigation-button' onClick={() => navigate(`/updatePet/${id}`)}>update profile</div>

        </div>
      )}
    </div>
  );
};

export default Detailspage;