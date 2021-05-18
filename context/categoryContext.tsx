import React, {createContext} from "react";
import {ICategoryData, IProps} from "../interfaces";
import {useLocalStorage} from '../hooks/useLocalStorage';

const defaultValue: number = 0

 const CategoryContext = createContext<ICategoryData | any>(defaultValue);


 const CategoryProvider = React.memo<IProps>(({children}) => {
    const [isCategoryId, setIsCategoryId] = useLocalStorage(defaultValue,defaultValue)

    

    return (
        <CategoryContext.Provider value={{isCategoryId, setIsCategoryId}}>
            { children }
        </CategoryContext.Provider>
    )
})

export {CategoryProvider, CategoryContext}