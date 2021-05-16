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
    readonly Images: [
        url: string | any
    ],
    readonly category: string

}
export interface IItemsOfCart {
  
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly index: number,
}

export interface ILoading {
    readonly isLoading: boolean,
    readonly setIsLoading: void
}

export interface IItemsOfCategory {
    readonly id: number,
    readonly Name: string,
    Image: {
        url: string
    },
}

export interface IItemsOfProducers {
    readonly id: number,
    readonly Name: string,
    readonly Logo: {
        url: string
    },
}

export interface ICategoryData {
    readonly isCategoryId: number | null,
    readonly setIsCategoryId:  void
}

export interface ICartData {
    readonly cart: [] | null,
    readonly setCart:  void
}

export interface IProducerData {
    readonly isProducerId: number | null,
    readonly setIsProducerId:  void
}

export interface IProductData {
    readonly isProductId: number | null,
    readonly setIsProductId:  void
}
export interface IProps {
    readonly children?: ReactNode,
}

export interface IStyledProps {
    readonly  current: any,
}