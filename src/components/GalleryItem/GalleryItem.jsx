import React from 'react';
import './GalleryItem.css';

export default function GalleryItem(props) {
  return (
    <div
      className="panel"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
    </div>
  );
}
