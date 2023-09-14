import React from 'react'
import { useContext } from 'react';
import '../search-bar/search-bar.styles.scss'
import { CategoryContext } from '../../context/CreateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




const SearchBar = (props) => {

    const {searchInputValue,setSearchInputValue} =useContext(CategoryContext)

     const handleChange=(e)=>{
        setSearchInputValue(e.target.value)
     }


  return (
    <div className="search-bar-container">
        <input onChange={handleChange} placeholder='Search a product'  value={searchInputValue} />
        <div className="search-icon-container">
                <button onClick={props.handleClick}>        
                 <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>    
                </button>
        </div>
    </div>
  )
}

export default SearchBar