import React, {createContext} from "react";
import {ICartData, IProps} from "../interfaces";
import {useLocalStorage} from '../hooks/useLocalStorage';



const defaultValue: [] = []

 const CartContext = createContext<ICartData | any>(defaultValue);


 const CartProvider = React.memo<IProps>(({children}) => {


    const [isCart, setCart] = useLocalStorage(defaultValue, defaultValue)

    return (
        <CartContext.Provider value={{isCart, setCart}}>
            { children }
        </CartContext.Provider>
    )
})

export {CartProvider, CartContext}