import React, {createContext, useState} from "react";
import {ICategoryData, IProps} from "../interfaces";



const defaultValue: number = 0

 const CategoryContext = createContext<ICategoryData | any>(defaultValue);


 const CategoryProvider = React.memo<IProps>(({children}) => {
    const [isCategoryId, setIsCategoryId] = useState<ICategoryData | any>(defaultValue)

    return (
        <CategoryContext.Provider value={{isCategoryId, setIsCategoryId}}>
            { children }
        </CategoryContext.Provider>
    )
})

export {CategoryProvider, CategoryContext}