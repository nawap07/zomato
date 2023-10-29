import React from 'react'
import "./diningOut.css";
import Collections from '../common/collections';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { dinningout } from '../../data/dinningout';

const collectionsList=[
  {
    id:1,
    title:"23 Screen Rooftop Places",
    cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places:"24 places",
  },
  {
    id:2,
    title:"21 Newly Opened Restaurent",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places:"12 Places",
  },
  {
    id:3,
    title:" 10 Trendind Restaurents",
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places:"9 Places",
  },
  {
    id:4,
    title:"11 Picturesque Cafes",
    cover:"https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
    places:"10 Places"
  },
  {
    id:5,
    title:"Romentic Dinning Places",
    cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places:"14 Places"
  },
  {
    id:6,
    title:"Must-Visit Legendary Places",
    cover:"https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675078571.jpg",
    places:"11 Places"
  },
  {
    id:7,
    title:"Winner of Zomato Restaurents",
    cover:"https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places:"17 Places"
  },
  {
    id:8,
    title:"Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places:"21 Places"
  },
];
const dinningFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title:"Filters",
  },
  {
    id:2,
    title:"Rating:4.0+",
  },
  {
    id:3,
    title:"Safe and Hygienic"
  },
  {
    id:4,
    title:"Pure Veg"
  },
  {
    id:5,
    icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
    title:"Delivery Time"
  },
  {
    id:6,
    title:"Great Offer"
  },
];

const dinningList=dinningout;
const DininingOut = () => {
  return (
    <div>
      <Collections lists={collectionsList}/>
      <div className="max-width">
        <Filters filterList={dinningFilters}/>
        <ExploreSection lists={dinningList} collletionName="Trending dining restaurants in Bengaluru"/>
      </div>
    </div>
  )
}

export default DininingOut;