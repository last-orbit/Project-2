import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [color, setColor] = useState('');
  const [temperament, setTemperament] = useState('');
  const [description, setDescription] = useState('');

const nav = useNavigate();
  function handleFormSubmit(e) {
    e.preventDefault();

    const newPet = {
      image: image,
      name: name,
      age: age,
      breed: breed,
      color: color,
      temperament: temperament,
      description: description,

    };
    axios.post('http://localhost:5005/pets', newPet)
      .then(({ res }) => {
        console.log(res);
        alert('Pet Added');
      })
      .catch((err) => {
        console.log(err);
        setImage('');
        setName('');
        setAge('');
        setBreed('');
        setColor('');
        setTemperament('');
        setDescription('');
      })
    nav('/');
    // console.log(...cats, newPet);
  }
  return (
    <>
      <div className='add-form'>
        <h2>Add your Pet</h2>
        <form onSubmit={handleFormSubmit}>
          {' '}
          <label>Image</label>
          <input
            type='text'
            value={image}
            placeholder='image url'
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
          <label>Name</label>
          <input
            type='text'
            value={name}
            placeholder='Name'
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label> Age</label>
          <input
            type='number'
            value={age}
            placeholder='Age'
            min={1}
            max={25}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <label>Breed</label>
          <input
            type='text'
            value={breed}
            placeholder='Ex: German Shepard, Pitbull, Siamese Cat, British Shorthair'
            onChange={(event) => {
              setBreed(event.target.value);
            }}
          />
          <label>Color</label>{' '}
          <input
            type='text'
            value={color}
            placeholder='Ex: Black, Buff-Tiger, Brown,  etc. '
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <label>Temperament</label>{' '}
          <input
            type='text'
            value={temperament}
            placeholder='For Ex: Social, Vocal, Intelligent'
            onChange={(event) => {
              setTemperament(event.target.value);
            }}
          />
          <label>Description</label>{' '}
          <input
            type='text'
            value={description}
            placeholder='Description of your Pet!'
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <button className='addPet-button'>Add Pet</button>
        </form>
      </div>
    </>
  );
};

export default AddPet;
