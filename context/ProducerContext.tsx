import React, {createContext, useState} from "react";
import {ICategoryData, IProps} from "../interfaces";




const defaultValue: number = 0

 const ProducerContext = createContext<ICategoryData | any>(defaultValue);


 const ProducerProvider = React.memo<IProps>(({children}) => {
    const [isProducerId, setIsProducerId] = useState<ICategoryData | any>(defaultValue)

    return (
        <ProducerContext.Provider value={{isProducerId, setIsProducerId}}>
            { children }
        </ProducerContext.Provider>
    )
})

export {ProducerProvider, ProducerContext}