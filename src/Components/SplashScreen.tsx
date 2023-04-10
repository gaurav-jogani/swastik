import React from 'react';
import { useNavigate } from "react-router-dom";
import Carousel from './Carousel';

const SplashScreen = () => {
    const nav = useNavigate();
    const handleChange  = () : void => {
        nav('/selectLang');
    }
    const Imgdata  : {
      id : Number,
      imgSrc : String
    }[] = [
      {
        id: 1,
        imgSrc: '/imgC1.png'
      },
      {
        id: 2,
        imgSrc: '/imgC1.png'
      },
      {
        id: 3,
        imgSrc: '/imgC1.png'
      }
    ]
  return (
    <div>
      <div className='screen1'>
        <div className='screen1-1'><Carousel data={Imgdata}/></div>
        <div className='screen1-2'><img src='/logo.png'/></div>
        <div className='screen1-3'>
            <span style={{ color: '#07989D'}}>Swastik Clinic</span> will help for your health
        </div>
        <div className='screen1-4'>
            Make easy doctor appointments without queuing and get prescriptions on your mobile.
        </div>
        <div className='screen1-5'>
            <button onClick={handleChange}>Get Started</button>
        </div>
      </div> 
    </div>
  )
}

export default SplashScreen
