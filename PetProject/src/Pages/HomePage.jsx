 No import React, { useState, useEffect } from 'react';
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
  // //console.log('hello');
  const [catImage, setCatImage] = useState([]);

  useEffect(() => {
    axios('http://localhost:5005/cats')
      .then((response) => {
        setCats(response.data);
        console.log('cat data', response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className='main-container'>
        <div className='swipe-left'>
          <button>Swipe Left</button>
        </div>
        <div className='cats-container'>
          {/* { {catImage.map((cat) => (
            <Link key={cat} to={`/profile/${cat}`}>
              <div className='profile-container'>
                <img src={cat.message} alt='A cute cat' />
                <div className='info-container'>
                </div>
              </div>
            </Link>
          ))} This is for thecatapi image}
          {catImage ? (
            <Link to={`/profile/${catImage.id}`}>
              <div className='profile-container'>
                <img src={catImage} alt='A cute cat' />
                <div className='info-container'>
                </div>
              </div>
            </Link>
          ) : (
            <p> Loading ....</p>
          )} this is for the dog api and works*/}

          {catImage && catImage.map((cat) => (
            <Link key={cat.id} to={`/profile/${cat.id}`}>
              <div className='profile-container'>
                <img src={cat.image} alt='A cute cat' />
              </div>
            </Link>
          ))}
        </div>
        <div className='swipe-right'>
          <button>Swipe Right</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
