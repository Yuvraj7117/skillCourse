import React,{useEffect, useRef} from 'react';
import {BsSearch} from 'react-icons/bs';
import './header.css'


const Header = (props) => {
  const {setInputText} = props.value

    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.style.border="none";
        inputRef.current.style.width="20vw"
    },[])
    const handleChange = (e)=>{
      
      setInputText(e.target.value)
    }
  return (
   <>
     <div className='header'>
        <h1>
            Skills List
        </h1>
        <div className='searchbar'>
            <input ref={inputRef} placeholder="Search Skills" onChange={handleChange}/>
            <BsSearch className='search_icon' onClick={()=>{inputRef.current.focus()}}/>
        </div>
     </div>
     
   </>
  )
}

export default Header