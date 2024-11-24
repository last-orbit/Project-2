import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import axios from 'axios';
{
  /**
    APIs
    cats profile data: base endpoint: 'https://www.freetestapi.com/apis/cats' No access-control-allow-origin header is present on the requested resource.
    cats imgs: base endpoint: https://www.cataas.com can't get random image
    cats imgs: base endpoint: https://api.thecatapi.com/v1/images/search gives random image and it works
    dog imgs : https://dog.ceo/api/breeds/image/random gives random image and it works
    */
}
const HomePage = () => {
  // console.log('hello');
  const [catImage, setCatImage] = useState([]);

  useEffect(() => {
    // axios('https://api.thecatapi.com/v1') this is what we had on friday
    //   .then((response) => {
    //     setCats(response.data);
    //     console.log('hello', response.data);
    //   })
    //   .catch((err) => console.log(err));
    // This is what we did on Friday
    async function fetchCats() {
      // e.preventDefault()
      try {
        const { data } = await axios.get('https://freetestapi.com/api/v1/cats');
        setCatImage(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCats();
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
