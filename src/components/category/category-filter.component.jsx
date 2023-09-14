import { useContext } from "react";
import './category-filter.styles.scss';
import { CategoryContext } from "../../context/CreateContext";


    
const CategoryFilter = () => {
 const {categories,selectedCategory,setSelectedCategory}=useContext(CategoryContext)

 const handleCategorySelection = (e) => {
  setSelectedCategory(e.target.value);
}

  return (
      <div className="search-filter">
          <select name="" id="" value={selectedCategory} onChange={handleCategorySelection}>
              <option value="">--select prodcut</option>
              {categories.map(category=>
                <option key={category.id} value={category.productCategory}>{category.productCategory}</option>
              )

              }
          </select>
      </div>
  )
}

export default CategoryFilter

