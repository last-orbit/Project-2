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
    /* const fet chPet = async () => {
      try {
        const response = await fetch(`http://localhost:5005/pets/${id}`);
        const data = await response.json();

        setCat(data);
        setImage(image);

      } catch (error) {
        console.log(error);
      }
    };
    fetchPet(); */
  }, []);

  return (
    <div>{cat && (
      <div>
        <img src={catPicUrl} />

        <div>{cat.name}</div>
        <div>{cat.origin}</div>
        <div>{cat.temperament}</div>
        <div>{cat.description}</div>

      </div>
    )}</div>
  );
};

export default Detailspage;