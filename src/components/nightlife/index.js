import React from 'react'
import "./nightlife.css";
import { nightlife } from '../../data/nightlife';
import Collections from '../common/collections';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';

const collectionList=[
  {

  }
];

const nightFilter=[
  {

  }
]
const nightlist=nightlife;
const Nightlife = () => {
  return (
    <div>
      <Collections lists={collectionList}/>
      <div className="max-width">
        <Filters filterList={nightFilter}/>
      </div>
      <ExploreSection lists={nightlist} collletionName ="Nightlife Restaurants in Bengaluru"/>
    </div>
  )
}

export default Nightlife;