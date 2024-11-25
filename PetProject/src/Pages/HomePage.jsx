import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import axios from 'axios';
{
  /**
    APIs
    cats profile data: 'https://www.freetestapi.com/apis/cats'  
    cats imgs: https://api.thecatapi.com/v1/images/search?limit=10 for more imgs a key is needed

    http://localhost:5005/cats for cat data
    http://localhost:5005/catpics for cat pictures
    */
}
const HomePage = () => {
  //console.log('hello');
  const [cats, setCats] = useState([]);
  const [catPic, setCatPic] = useState([]);
  useEffect(() => {
    axios('http://localhost:5005/cats')
      .then((response) => {
        setCats(response.data);
        console.log('cat data', response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios('http://localhost:5005/catpics/4dm')
      .then((response) => {
        setCatPic(response.data);

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className='main-container'>
        <div className='swipe left' >{/**will become a button */}</div>
        <div className='ui-container'>
          <div className='profile-container'>
            <div>
              <img src={catPic.url} alt='cat photo' />
            </div>
            <div className='info-container'>
              <div className='basic-info'>
                <p>info</p>
              </div>
              <div className='tweets'>
                <p>tweet</p>
              </div>
            </div>
          </div>
          <Link to='/profile/:id'>
            <div className='hook-up-button'></div>
          </Link>
        </div>
        <div className='swipe right'>{/**will become a button */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
