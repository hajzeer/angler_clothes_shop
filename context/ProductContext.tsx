import React, {createContext, useState} from "react";
import {IProductData, IProps} from "../interfaces";




const defaultValue: number = 0

const ProductContext = createContext<IProductData | any>(defaultValue);


const ProductProvider = React.memo<IProps>(({children}) => {
    const [isProductId, setIsProductId] = useState<IProductData | any>(defaultValue)

    return (
        <ProductContext.Provider value={{isProductId, setIsProductId}}>
            { children }
        </ProductContext.Provider>
    )
})

export {ProductProvider, ProductContext}