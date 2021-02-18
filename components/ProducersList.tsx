import React from 'react';
import styled from 'styled-components';

import {IItemsOfProducers} from "../interfaces";
import Producers from "./Producers";


interface ProductsListProps {
    producers: Array<IItemsOfProducers>
}

const ProductsList = React.memo<ProductsListProps>(({producers}: ProductsListProps) => {

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
                producers.map(producer => {
                    return (
                        <Producers items={producer} key={producer.id}/>
                    )})
            }
        </Container>
    )
});

export default ProductsList;