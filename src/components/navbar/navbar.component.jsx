import React from 'react'
import '../navbar/navbar.styles.scss'
import CategoryFilter from '../category/category-filter.component'


const Navbar= () => {
  return (
    <nav className='navbar'>
        <img className='nav-logo' src="https://productlist-app.netlify.app/static/media/logo.8be8365c6b0831e4d3b2.png" alt="" />
        <h1 className="nav-title">Product List</h1>
        <CategoryFilter/>
    </nav>
  )

}

export default  Navbar
