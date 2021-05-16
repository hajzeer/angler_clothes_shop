import React, {createContext, useState} from "react";
import {ICartData, IProps} from "../interfaces";



const defaultValue: [] = []

 const CartContext = createContext<ICartData | any>(defaultValue);


 const CartProvider = React.memo<IProps>(({children}) => {
    const [isCart, setCart] = useState<ICartData | any>(defaultValue)

    return (
        <CartContext.Provider value={{isCart, setCart}}>
            { children }
        </CartContext.Provider>
    )
})

export {CartProvider, CartContext}