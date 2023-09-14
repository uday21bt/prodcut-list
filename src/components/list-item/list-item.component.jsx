import React from 'react'
import '../list-item/list-item.styles.scss'

const ListItem = ({productName,productImageURL,productPrice,productCategory}) => {
 
  return (
    <div className='category-container'>
        <img className='background-image' src={productImageURL} alt={productName} />

        <div className="category-body-container">
            <h2 className="title">  {productCategory} </h2>
          <h2 className="amount">starts from <span>${productPrice} </span> </h2>
        </div>
    </div>
  )
}

export default ListItem