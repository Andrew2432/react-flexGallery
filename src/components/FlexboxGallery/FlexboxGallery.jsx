import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './FlexboxGallery.css';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';

const itemData = [
  {
    id: 1,
    image: image1,
    text1: 'Hello',
    text2: 'Hello',
    text3: 'Hello',
  },
  {
    id: 2,
    image: image2,
    text1: 'Hello',
    text2: 'Hello',
    text3: 'Hello',
  },
  {
    id: 3,
    image: image3,
    text1: 'Hello',
    text2: 'Hello',
    text3: 'Hello',
  },
  {
    id: 4,
    image: image4,
    text1: 'Hello',
    text2: 'Hello',
    text3: 'Hello',
  },
  {
    id: 5,
    image: image5,
    text1: 'Hello',
    text2: 'Hello',
    text3: 'Hello',
  },
];

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
