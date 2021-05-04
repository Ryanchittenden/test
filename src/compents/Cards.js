import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout our Location</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='Explore our GalleryExplore our GalleryExplore our GalleryAll our information about our amazing packages'
              label='Adventure'
              path='/gallery'
            />
            <CardItem
              src='/images/img-1.jpg'
              text='All our information about our amazing packagesAll our information about our amazing packages'
              label='Deals'
              path='/packages'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-6.jpg'
              text='Explore our GalleryExplore our GalleryExplore our Gallery'
              label='About Us'
              path='/about-us'
            />
            <CardItem
              src='/images/img-7.jpg'
              text='Our Area'
              label='Location'
              path='/location'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Explore our Gallery'
              label='Adventure'
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
