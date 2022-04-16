import React from "react";
import ProductsList from "./ProductsList";
import './Style.css';

const productsArr = [

    {
        id:0,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:1
    },
    {
        id:1,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:1
    }, 
    {
        id:2,  
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:1
    },
    {
        id:3,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:1
    }
    
    ]

    const AvailableProducts = () => {

        const products = productsArr.map((product) => (
            <ProductsList
                id={product.id}
                key={product.id}
                title={product.title}
                img={product.imageUrl}
                price={product.price} 
                quantity={product.quantity} 
                />
        ))
       
        return (
            
            <ul className="productContainer">
                {products}
            </ul>
        )
    };

    export default AvailableProducts;