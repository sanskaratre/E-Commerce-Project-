import React, {Fragment} from "react";
const ProductsList = (props) => {
    const imagescr = props.image;
    return (
        <Fragment>
            <ul>
                <div> Title: {props.title}</div>
                <div> <img src={imagescr} alt='product_photo' /> </div>
                <div> Price: {props.price} </div>
            </ul>
        </Fragment>
    )
    
};

export default ProductsList;