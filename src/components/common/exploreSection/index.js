import React from 'react'
import "./exploreSection.css"
import ExploreCards from './explorecard'

const ExploreSection = ({lists,collletionName}) => {
  return (
    <div className='max-width explore-section'>
      <div className="collection-title">{collletionName}</div>
      <div className="explore-grid">
        {lists.map((restaurents)=>{
          return <ExploreCards key={restaurents.id}  restuarents={restaurents}/>
          
        })}
      </div>
    </div>
  )
}

export default ExploreSection;