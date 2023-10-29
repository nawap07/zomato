import React from 'react'
import "./deliveryItem.css";

const DeliveryItems = ({items}) => {
  return (
    <div className=""> 
    <div className='delivery-item-cover'>
      <img src={items.cover} alt={items.title} className='delivery-items-image' />
    </div>
    <div className="delivery-item-title">{items.title}</div>
    </div>
  )
}

export default DeliveryItems;