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
  return (
    <>
      <div className='add-form'>
        <h2>Update your Pet</h2>
        <form onSubmit={handleUpdatePet}>
          {' '}
          <label>Image</label>
          <input type='text' name="image" value={petToUpdate.image} onChange={handleChange} />
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
          <button className='addPet-button'>Add Pet</button>
        </form>
      </div>
    </>
  );
};

export default UpdatePet;
