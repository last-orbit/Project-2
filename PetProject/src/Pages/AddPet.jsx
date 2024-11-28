import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [color, setColor] = useState('');
  const [temperament, setTemperament] = useState('');
  const [description, setDescription] = useState('');

  const nav = useNavigate();
  function handleFormSubmit(e) {
    e.preventDefault();

    const newPet = {
      url: url,
      name: name,
      age: age,
      species: species,
      breed: breed,
      color: color,
      temperament: temperament,
      description: description,

    };
    axios.post('http://localhost:5005/yourPets', newPet)
      .then(( res ) => {
        console.log(res);
        alert('Pet Added');
    nav('/');

      })
      .catch((err) => {
        console.log(err);
        setUrl('');
        setName('');
        setAge('');
        setSpecies('');
        setBreed('');
        setColor('');
        setTemperament('');
        setDescription('');
      });
    // console.log(...cats, newPet);
  }
  return (
    <>
      <div className='add-form main-container'>
        <h2>Add your Pet</h2>
        <form onSubmit={handleFormSubmit}>
          {' '}
          <label>Image</label>
          <input
            type='text'
            value={url}
            placeholder='image url'
            onChange={(event) => {
              setUrl(event.target.value);
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
          <label>Species</label>
          <select name="species" id="species" value={species} onChange={(event) => { setSpecies(event.target.value)}}>
            <option value="dog">Dog🐶</option>
            <option value="cat">Cat🐱</option>
            <option value="bird">Bird🐦</option>
            <option value="reptile">Reptile🦎</option>
          </select>
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
