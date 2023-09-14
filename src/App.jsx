import React, { useContext } from 'react'
import { CategoryContext } from './context/CreateContext'
import Navbar from './components/navbar/navbar.component'
import DirectoryComponent from './components/directory/directory.component'
import SearchBar from './components/search-bar/search-bar.component'
import SortList from './components/sort-list/sort-list.component'




const App = () => {
  
  const {listOfProducts}=useContext(CategoryContext )
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <SortList/>
      <DirectoryComponent   products={listOfProducts}/>

      </>
  )
}

export default App