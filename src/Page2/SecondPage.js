import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FilterSection from './components/FilterSection';
import TableSection from './components/TableSection';
import './secondpage.css'


const SecondPage = (props) => {
  
  const [saveLocalData, setSaveLocalData] = useState([])
  const { rowData } = props.value

  const save = (data) => {
    if (data) {
      let local = JSON.parse(localStorage.getItem("data"))

      if (local) {
        localStorage.setItem("data", JSON.stringify([...local, data]))
        setSaveLocalData([...local, data])
      }
    }
  }

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem("data"))
    if (!local) {
      localStorage.setItem("data", JSON.stringify([...saveLocalData]))
    }
  })
  return (
    <>
      <div style={{ width: "50%", marginLeft: "3%" }}>
        <FilterSection value={{ rowData, save }} />
        <TableSection value={{ setSaveLocalData}} />
      </div>

    </>
  )
}

export default SecondPage;