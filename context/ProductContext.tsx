import React, {createContext} from "react";
import {IProductData, IProps} from "../interfaces";
import {useLocalStorage} from '../hooks/useLocalStorage';

const defaultValue: number = 0

const ProductContext = createContext<IProductData | any>(defaultValue);


const ProductProvider = React.memo<IProps>(({children}) => {
    const [isProductId, setIsProductId] = useLocalStorage(defaultValue, defaultValue)

    return (
        <ProductContext.Provider value={{isProductId, setIsProductId}}>
            { children }
        </ProductContext.Provider>
    )
})

export {ProductProvider, ProductContext}