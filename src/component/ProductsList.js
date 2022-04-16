import React, {Fragment,useContext} from "react";
import CartContext from "./CartContext";
import './Style.css';

const ProductsList = (props) => {

    const cartCntxt = useContext(CartContext);

    const addToCart = (event) =>{
        event.preventDefault();
        const itm = {
            id: props.id,
            title: props.title,
            imgsrc:props.img,
            price: props.price,
            quantity: props.quantity
        };
        cartCntxt.addItem(itm);
       
    };

    const imgsrc = props.img;
    return (
        <Fragment>
            <ul className="propducts">
                <div> Title: {props.title}</div>
                <div> <img src={imgsrc} alt='product_photo' /> </div>
                <div> Rs. {props.price} </div>
                <button style={{backgroundColor : 'lightgreen'}} onClick={addToCart} >Add To Cart</button>
            </ul>
        </Fragment>
    )
    
};

export default ProductsList;