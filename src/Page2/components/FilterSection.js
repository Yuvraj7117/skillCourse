import React from 'react';
import {MdSave} from 'react-icons/md';
import './filtersection.css'

const FilterSection = (props) => {
  const {rowData,save} = props.value

  return (
    <>
    <h1>Javascript</h1>
    <div className='filter_section'>
        <div >
        <label>Category</label>
        <select style={{width:"15vw",cursor:"pointer"}}>
            <option>{rowData[0].category}</option>
        </select>
        </div>
        <div><label>Subcategory</label>
        <select style={{width:"15vw",cursor:"pointer"}}>
            <option>{rowData[0].subcategory}</option>
        </select></div>
        <div className='save_button' onClick={()=>{save(rowData[0])}}>
          <MdSave/>
          <span>Save</span>
        </div>
    </div>

    </>
  )
}

export default FilterSection