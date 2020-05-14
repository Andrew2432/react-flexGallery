import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import itemData from '../../data/itemData';
import './FlexboxGallery.css';

function createItem(item) {
  return (
    <GalleryItem
      key={item.id}
      image={item.image}
      text1={item.text1}
      text2={item.text2}
      text3={item.text3}
    />
  );
}

export default function FlexboxGallery() {
  return <section className="panels">{itemData.map(createItem)}</section>;
}
