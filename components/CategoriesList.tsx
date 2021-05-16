import React from 'react';
import styled from 'styled-components';

import {IItemsOfCategory} from "../interfaces";
import Categories from "./Categories";


interface ProductsListProps {
    categories: Array<IItemsOfCategory>
}

const CategoriesList = React.memo<ProductsListProps>(({categories}) => {

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
                categories.map(category => {
                    return (
                        <Categories items={category} key={category.id}/>
                    )})
            }
        </Container>
    )
});

export default CategoriesList;