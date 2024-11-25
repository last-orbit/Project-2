import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detailspage = () => {
  const [cat, setCat] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:5005/cats/${id}`)
      .then(console.log(id))
      .then(response => setCat(response.data))

      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>{cat && (
      <div>
        <img src='' />

        <div>{cat.name}</div>
        <div>{cat.origin}</div>
        <div>{cat.temperament}</div>
        <div>{cat.description}</div>

      </div>
    )}</div>
  );
};

export default Detailspage;