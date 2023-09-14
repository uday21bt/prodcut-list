    import React from 'react'
    import '../directory/directory.styles.scss'
    import ListItem from '../list-item/list-item.component'
    
    const DirectoryComponent = ({products}) => {
      return (
         <div className="categories-container">
            {products.map(item=>{
                return(
                    <ListItem key={item.id} {...item}/>  
                )
            })} 
         </div>
      )
    }
    
    export default DirectoryComponent