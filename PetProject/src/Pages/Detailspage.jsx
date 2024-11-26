import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Detailspage = () => {
  const [cat, setCat] = useState();
  const { id } = useParams();

  const location = useLocation();
  const catPicUrl = location.state;

  useEffect(() => {
    axios.get(`http://localhost:5005/pets/${id}`)
      .then(response => setCat(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>{cat && (
      <div className='pet-details'>
        <img src={catPicUrl} />
        <div className='details-info-container'>

          <h1>Get to know "{cat.name}" *raawwrrrr*</h1>
          <div>{cat.origin}</div>
          <div className='details-temperament'>{cat.temperament}</div>
          <div className='details-description'>{cat.description}</div>

        </div>
      </div>
    )}</div>
  );
};

export default Detailspage;