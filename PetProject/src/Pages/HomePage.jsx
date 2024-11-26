import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import axios from 'axios';
{
  /**
    APIs
    cats profile data: 'https://www.freetestapi.com/apis/cats' No access-control-allow-origin header is present on the requested resource
    cats imgs: base endpoint: https://www.cataas.com can't get random image
    cats imgs: https://api.thecatapi.com/v1/images/search?limit=10 for more imgs a key is needed
    dog imgs : https://dog.ceo/api/breeds/image/random gives random image and it works

    http://localhost:5005/cats for cat data
    http://localhost:5005/catpics for cat pictures
    */
}
const HomePage = () => {
  const [cats, setCats] = useState([]);
  const [catPics, setCatPics] = useState({});
  const [randomCat, setRandomCat] = useState({});
  const [catPic, setCatPic] = useState({});

  function getRandomItem(arr) {
    return arr.at(Math.floor(Math.random() * arr.length));
  }

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5005/pets');
        const response2 = await fetch(`http://localhost:5005/catpics`);

        const data = await response.json();
        const images = await response2.json();

        setCats(data);
        setRandomCat(getRandomItem(data));

        setCatPics(images);
        setCatPic(getRandomItem(images));

      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  const getRandomProfile = () => {
    setRandomCat(getRandomItem(cats));
    setCatPic(getRandomItem(catPics));
  };

  /* {cats.map((cat) => (
    <Link key={cat} to={`/profile/${cat}`}>
      <div className='profile-container'>
        <img src={cat.url} alt='A cute cat' />
        <div className='info-container'>
        </div>
      </div>
    </Link>
  ))}
  */
  return (
    <div>
      <div className='main-container'>
        <div className='swipe left' ></div>
        <div className='ui-container'>
          <div className='profile-container'>
            <div>
              <img className='foto' src={catPics.url} alt='cat photo' />
            </div>
            <div className='info-container'>
              <div className='basic-info'>
                <p>{randomCat.name}</p>
                <p>{randomCat.origin}</p>
              </div>
              <div className='tweets'>
                <p>find a tweet api... third call -.-</p>
              </div>
            </div>
          </div>
          <Link to={`/profile/${randomCat.id}`} state={catPic.url}>
            <div className='hook-up-button'></div>
          </Link>
        </div>
        <div className='swipe right' onClick={getRandomProfile}>{/**will become a button */}</div>
      </div>
    </div>
  );
};
export default HomePage;
