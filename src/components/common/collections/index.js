import React from 'react'
import "./collection.css";
import Slider from "react-slick"
import NextArrow from '../carousel/nextArrow';
import PreviousArrow from '../carousel/previousArrow';

const settings = {
  infinite:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:  <NextArrow/>,
  prevArrow: <PreviousArrow/>,
};
const Collections = ({lists}) => {
  return (
    <div className='collection-wrapper'>
      <div className="max-width collections">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle">
          <div className="collection-subtitle-text">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</div>
        <div className="collection-location">
          <div className="absolute-center">All collections in Bengaluru<i className="fi fi-rr-caret-right absolute-center"></i></div> 
          </div>
          </div>
          <Slider {...settings}>
            {lists.map((item)=>(
              <div key={item.id}>
                <div className="collection-cover">
                  <img src={item.cover} alt={item.place} className='collection-image' />
                  <div className="grident-bg"></div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle">
                    <div className="">{item.places}</div> 
                    <i className="fi fi-rr-caret-right iconss "></i>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </div>
  )
}

export default Collections;