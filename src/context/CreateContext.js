import { createContext, useEffect, useState } from "react";
import products from "../constants/product";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
    const [listOfProducts, setListOfProducts] = useState(products);

    const [selectedCategory, setSelectedCategory] = useState('');

    const [searchInputValue, setSearchInputValue] = useState('');

    const [priceOrder, setPriceOrder] = useState('');

    const [ratingOrder, setRatingOrder] = useState('');

    let uniqueCategories = [...new Set(products.map(product => product.productCategory))];

    const categories = uniqueCategories.map((uniqueCategory, index) => {
        return {
            id: index,
            productCategory: uniqueCategory
        }
    });

    const sortPrice = (productsList) => {
        if(priceOrder === '') {
            return productsList;
        }
        if(priceOrder === 'asc') {
            let list = [...productsList].sort((a, b) =>
                Number(a.productPrice) - Number(b.productPrice)
            );
            return list;
        }
        else if(priceOrder === 'desc') {
            let list = [...productsList].sort((a, b) =>
                Number(b.productPrice) - Number(a.productPrice)
            );
            return list;
        }
    }

    const sortRating = (productsList) => {
        if(ratingOrder === '') {
            return productsList;
        }
        if(ratingOrder === 'asc') {
            let list = [...productsList].sort((a, b) =>
                Number(a.productRating) - Number(b.productRating)
            );
            return list;
        }
        else if(ratingOrder === 'desc') {
            let list = [...productsList].sort((a, b) =>
                Number(b.productRating) - Number(a.productRating)
            );
            return list;
        }
    }

    useEffect(() => {
        const changeList = () => {
            if(selectedCategory === '' && searchInputValue === '') {
                setListOfProducts(products);
                return;
            }
            let list = products.filter(item => {
                return searchInputValue === '' ? 
                item.productCategory === selectedCategory : 
                (selectedCategory === '' ? item.productCategory.toLowerCase().includes(searchInputValue.toLowerCase()) || 
                item.productName.toLowerCase().includes(searchInputValue.toLowerCase()) : 
                (item.productCategory === selectedCategory) && (item.productCategory.toLowerCase().includes(searchInputValue.toLowerCase()) || 
                item.productName.toLowerCase().includes(searchInputValue.toLowerCase())));
            });
            list = sortPrice(list);
            list = sortRating(list);

            setListOfProducts(list);
        }

        changeList();
    }, [selectedCategory, searchInputValue]);

    useEffect(() => {
        if(priceOrder !== '') {
            let list = sortPrice(listOfProducts);
            setListOfProducts(list);
        }

    }, [priceOrder]);

    useEffect(() => {
        if(ratingOrder !== '') {
            let list = sortRating(listOfProducts);
            setListOfProducts(list);
        }

    }, [ratingOrder]);

    const contextValue = { 
        categories,
        listOfProducts,
        setListOfProducts,
        selectedCategory,
        setSelectedCategory,
        searchInputValue,
        setSearchInputValue,
        priceOrder,
        setPriceOrder,
        ratingOrder,
        setRatingOrder,
    };

    return (
        <CategoryContext.Provider value={ contextValue }>
            { children }
        </CategoryContext.Provider>
    );
}