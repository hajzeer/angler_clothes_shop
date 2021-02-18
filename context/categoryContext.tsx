import React, {ReactNode, createContext, useState} from "react";



export interface ICategoryData {
    readonly isCategoryId: number | null,
    readonly setIsCategoryId: (isCategoryId: number ) => void
}

interface IProps {
        readonly children?: ReactNode,
}

const defaultValue: number = 0

export const CategoryContext = createContext<ICategoryData | any>(defaultValue);


export const CategoryProvider = ({children}: IProps) => {
    const [isCategoryId, setIsCategoryId] = useState<ICategoryData | any>(defaultValue)

    return (
        <CategoryContext.Provider value={{isCategoryId, setIsCategoryId}}>
            { children }
        </CategoryContext.Provider>
    )
}