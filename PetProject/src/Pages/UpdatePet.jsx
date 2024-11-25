import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePet = () => {
  const [petToUpdate, setPetToUpdate] = useState({});
  const { petId } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/pets/${petId}`)
      .then((res) => {
        setPetToUpdate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [petId]);
  function handleFormSubmit(e) {
    e.preventDefault();

    axios
      .get('http://localhost:5005/pets', newPet)
      .then((res) => {
        console.log(res);
        alert('Pet Added');
        return <Navigate to='/' />;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className='add-form'>
        <h2>Update your Pet</h2>
        <form onSubmit={handleFormSubmit}>
          {' '}
          <label>Image</label>
          <input type='text' placeholder='image url' />
          <label>Name</label>
          <input type='text' value={name} placeholder='Name' />
          <label> Age</label>
          <input type='number' placeholder='Age' min={1} max={25} />
          <label >Breed</label>
          <input type="text" name=""  />
          <label>Color</label> <input type='text' placeholder='Ex: Black, Buff-Tiger, Brown,  etc. ' />
          <label>Temperament</label>{' '}
          <input type='text' placeholder='For Ex: Social, Vocal, Intelligent' />
          <label>Description</label>{' '}
          <input type='text' placeholder='Description of your Pet!' />
          <button className='addPet-button'>Add Pet</button>
        </form>
      </div>
    </>
  );
};

export default UpdatePet