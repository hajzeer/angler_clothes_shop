import React from 'react';
import styled from 'styled-components';

import {IItems} from "../interfaces";
import Products from "./Products";


interface ProductsListProps {
    products: Array<IItems>
}

const ProductsList = React.memo<ProductsListProps>(({products}: ProductsListProps) => {

    const Container = styled.section`
      
      margin: 50px;
      padding: 0;
      width: 100%;

      
      
      
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;

    `;
    return (
        <Container>
            {
                products.map(product => {
                    return (
                        <Products items={product} key={product.id}/>
                    )})
            }
        </Container>
    )
});

export default ProductsList;