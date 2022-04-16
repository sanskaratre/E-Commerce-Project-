import React,{useState} from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {

    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        let hasItem = false;
        const newArray = [...items];
        newArray.forEach((element,index) => {
            
            if(item.id === element.id) {
                hasItem = true;
                newArray[index].quantity = newArray[index].quantity + 1 ;
                
            }
        })

        if(hasItem === false) {
            setItems([...items,item])
        }
        else 
        setItems(newArray);
   

    };

    const removeItemFromCartHandler = (id) => {};


    const cartContext =  {
        items : items,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    };
    

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;