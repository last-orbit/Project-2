import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePet = () => {
  const [petToUpdate, setPetToUpdate] = useState({});
  const { petId } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios(`http://localhost:5005/pets/${petId}`)
      .then((res) => {
        setPetToUpdate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [petId]);

  function handleChange(e) {
    const whatWasTyped = e.target.value;
    const inputThatIsUsed = e.target.name;
    console.log(whatWasTyped, inputThatIsUsed);
    setPetToUpdate({ ...petToUpdate, [inputThatIsUsed]: whatWasTyped });
  }

  async function handleUpdatePet(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5005/pets/${petId}`,
        petToUpdate
      );
      console.log(data);
      nav('/');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeletePet(petId) {
    try {
      const { data } = await axios.delete(`http://localhost:5005/pets/${petId}`);
      console.log(data);
      nav('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='add-form main-container'>
        <h2>Update your Pet</h2>
        <form onSubmit={handleUpdatePet}>
          {' '}
          <label>Image</label>
          <input type='text' name="url" value={petToUpdate.url} onChange={handleChange} />
          <label>Name</label>
          <input
            type='text'
            value={petToUpdate.name}
            name='Name'
            onChange={handleChange}
          />
          <label> Age</label>
          <input
            type='number'
            name='Age'
            value={petToUpdate.age}
            min={1}
            max={25}
            onChange={handleChange}
          />
          <label>Breed</label>
          <input
            type='text'
            value={petToUpdate.breed}
            onChange={handleChange}
          />
          <label>Color</label>{' '}
          <input
            type='text'
            name='color'
            value={petToUpdate.color}
            onChange={handleChange}
          />
          <label>Temperament</label>{' '}
          <input
            type='text'
            name='temperament'
            value={petToUpdate.temperament}
            onChange={handleChange}
          />
          <label>Description</label>{' '}
          <input
            type='text'
            name='description'
            value={petToUpdate.description}
            onChange={handleChange}
          />
          <div id='row-buttons'>

            <button className='addPet-button'>Update Pet</button>
            <button className='addPet-button delete-button' onClick={() => {
              handleDeletePet(petId);
            }}>Delete Pet</button>

          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePet;
