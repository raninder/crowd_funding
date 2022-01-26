import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './style.css';

const fadeImages = [
  '/images/img1.png',
  '/images/img2.png',
  '/images/img3.png',
	'/images/img4.png',
	'/images/img5.png',
	'/images/img6.png',
	'/images/img7.png'
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

export default function SlideShow(){
    return (
      <div className="slide-container">
      <Fade {...fadeProperties}>
        {fadeImages.map(src => (
             <div className="each-fade">
               <img className='slide-img' src={src} alt="About Us" />
             </div> ))
        }
      </Fade>
    </div>
     
    )
}