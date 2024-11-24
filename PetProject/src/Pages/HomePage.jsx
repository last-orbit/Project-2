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
        <div className='swipe-left'>{/**will become a button */}</div>
        <Link to='/profile/:id'>
          <div className='profile-container'>
            <div>
              <div>
                <img src={''} alt='cat photo' />
              </div>
              <div className='info-container'>
                <p className='basic-info'></p>
                <div className='tweets'>
                  <p>tweet</p>
                </div>
              </div>
            </div>
            <button></button>
            {/*hook up button ?? */}
          </div>
        </Link>
        <div className='swipe-right'>{/**will become a button */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
