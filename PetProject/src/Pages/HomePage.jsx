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
  // //console.log('hello');
  const [cats, setCats] = useState([]);
  const [catPic, setCatPic] = useState({});
  const [randomCat, setRandomCat] = useState({});

  const [profileId, setProfileId] = useState(1);
  const [imageIndex, setImageIndex] = useState(randomIndex(10));

  function randomIndex(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  function getRandomIdCat(arr) {
    return arr.at(randomIndex(arr.length));
  }

  useEffect(() => {
    axios('http://localhost:5005/pets')
      .then((response) => {
        setCats(response.data);
        console.log('cat data', response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //console.log(cats);

  //get array of all cats ids - pick value at random index - set id value as fetch parameter
  const getRandomProfile = () => {
    let kitty = getRandomIdCat(cats);

    const profile = axios.get(`http://localhost:5005/cats/${profileId}`);
    const image = axios.get(`http://localhost:5005/catpics/${imageIndex}`);
    Promise.all([profile, image]).then((response) => {

      setRandomCat(response.at(0).data);
      setProfileId(kitty.id);

      setCatPic(response.at(1).data);
      setImageIndex(randomIndex(10));

    }).catch((err) => console.log(err));
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
      <NavBar />
      <div className='main-container'>
        <div className='swipe left' ></div>
        <div className='ui-container'>
          <div className='profile-container'>
            <div>
              <img className='foto' src={catPic.url} alt='cat photo' />
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
          <Link to={`/profile/${randomCat.id}`}>
            <div className='hook-up-button'></div>
          </Link>
        </div>
        <div className='swipe right' onClick={getRandomProfile}>{/**will become a button */}</div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
