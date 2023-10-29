import React from "react";
import "./exploreCard.css";

const ExploreCards = ({ restuarents }) => {
  const name = restuarents?.info?.name ?? "";
  const image = restuarents?.info?.image?.url;
  const DeliveryTime = restuarents?.order?.deliveryTime;
  const rating = restuarents?.info?.rating?.rating_text;
  const approxPrice = restuarents?.info?.cfo?.text;
  const offers = restuarents?.bulkOffers ?? [];
  const cuisines = restuarents?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainer = restuarents?.bottomContainers;
  const goldOff = restuarents?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const Discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;
  return (
    <div className="explore-card cur-pon">
      <div className="explore-card-cover">
        <img src={image} alt={name} className="explore-card-image" />
        <div className="delivery-time">{DeliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {Discount && <div className="discount absolute-center">{Discount}</div>}
        {rating && (<div className="res-rating ">{rating}<i className="fi fi-rr-star icon  "></i></div>
        )}
      </div>
      <div className="restuarents-row">
        <div className="res-name">{name}</div>
        
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisines">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisines-tag">
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="approx-price">{approxPrice}</div>}
      </div>
      {bottomContainer.length > 0 && (
        <div>
          <div className="card-seprator"></div>
            <hr />
          <div className="explore-bottom">
            <img
              src={bottomContainer[0]?.image?.url}
              alt={bottomContainer[0]?.text}
              style={{
                height: "15px" ,margin:'0px 2px 10px 0px ' 
              }}
            />
            <div className="res-bottom-text">{bottomContainer[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCards;
