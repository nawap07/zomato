import React from 'react'
import "./delivery.css";
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restuarents } from '../../data/restaurants';

const deleveryFilters=[
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

const restuarentsList=restuarents;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
      <Filters filterList={deleveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection lists={restuarentsList} collletionName="Delivery Restaurents in Banglore"/>
    </div>
  )
}

export default Delivery;