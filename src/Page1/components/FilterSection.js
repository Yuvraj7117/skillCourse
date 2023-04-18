import React from 'react';
import { FaFilter } from 'react-icons/fa';
import './filtersection.css';

const FilterSection = (props) => {
  const { datas, currentPage, shownItem, firstPage, setOptionText, handleFilter } = props.value

  const optionChange = (e) => {
    setOptionText(e.target.value)
  }

  return (
    <>
      <div className='filtersection'>
        <div >
          Showing {firstPage + 1}-{shownItem.length * currentPage} of {datas.length} Skills
        </div>
        <div>
          <label style={{ fontSize: "10px" }}>Category</label>
          <br />
          <select style={{ width: '10rem', border: "none", cursor: "pointer" }} onChange={optionChange} className="category">
            <option>All</option>
            {
              datas && datas.map((item, index) => {
                return (
                  <option key={index} >{item.category}</option>
                )
              })
            }
          </select>
        </div>
        <div onClick={() => { handleFilter() }}>
          <FaFilter className='filtericon' />
          <h3>Filter</h3>
        </div>
      </div>
    </>
  )
}

export default FilterSection;