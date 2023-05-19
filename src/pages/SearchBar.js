import React ,{useState} from 'react'
import"./SearchBar.css"
import { AiOutlineSearch } from 'react-icons/ai';
import ArticalItem from './Artical-item';


function SearchBar(props) {
 
  return (
    <>
    <div>
        <h6 className='heading' >All Artical</h6>
        <input type='text'  className='search-bar' placeholder='search artical' value={props.value} onChange={props.onChange}/>
        <AiOutlineSearch className="search-icon" />
      
    </div>
    
    </>
  )
}

export default SearchBar