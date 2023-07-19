import React from 'react';
import './SelectImg.css';

interface SelectsImgProps {
  bgImg: string;
  text: string;
}

function SelectsImg({ bgImg, text }: SelectsImgProps) {
  return (
    <div className='selects-location'>
      <img src={bgImg} alt='/' />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default SelectsImg;
