import React, {createContext} from "react";
import {ICategoryData, IProps} from "../interfaces";
import {useLocalStorage} from '../hooks/useLocalStorage';

const defaultValue: number = 0

 const ProducerContext = createContext<ICategoryData | any>(defaultValue);


 const ProducerProvider = React.memo<IProps>(({children}) => {
    const [isProducerId, setIsProducerId] = useLocalStorage(defaultValue, defaultValue)

    return (
        <ProducerContext.Provider value={{isProducerId, setIsProducerId}}>
            { children }
        </ProducerContext.Provider>
    )
})

export {ProducerProvider, ProducerContext}