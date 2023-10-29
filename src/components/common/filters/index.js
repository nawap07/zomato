import React from 'react'
import "./filter.css";
import FilterItems from './filterItem';

const Filters = ({filterList}) => {
  return (
    <div className='filters'>
      { filterList && filterList.map((filter)=>{
        return <FilterItems key={filter.id} filter={filter}/>
      })}
    </div>
  )
}

export default Filters;