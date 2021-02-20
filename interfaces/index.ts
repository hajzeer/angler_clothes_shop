// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//


import {ReactNode} from "react";

export interface IItems {
    readonly id: number,
    readonly Name: string,
    readonly producer: string,
    readonly Price: number,
    readonly state: number,
    readonly description: string,
    readonly Images: string,
    readonly category: string

}

export interface ILoading {
    readonly isLoading: boolean,
    readonly setIsLoading: void
}

export interface IItemsOfCategory {
    readonly id: number,
    readonly Name: string,
    readonly Image: string,
}

export interface IItemsOfProducers {
    readonly id: number,
    readonly Name: string,
    readonly Logo: string,
}

export interface ICategoryData {
    readonly isCategoryId: number | null,
    readonly setIsCategoryId:  void
}

export interface IProducerData {
    readonly isProducerId: number | null,
    readonly setIsProducerId:  void
}

export interface IProps {
    readonly children?: ReactNode,
}

export interface IStyledProps {
    readonly  current: any,
}