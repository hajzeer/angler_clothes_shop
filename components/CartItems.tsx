import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

interface IComponentsProps {
    readonly items: {
        id: number,
        name: string,
        price: number,
    }
}


const Container = styled.section`

width: 100%;
height: 50px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

p {

    font-size: 12px;
    margin: 0;
}

`

const RemoveButton = styled.button`

margin: 0;
padding: 0;
background: none;
border: none;
font-size: 20px;
color: #ffffff;
font-family: 'Anonymous Pro', monospace;


`


const CartItems = React.memo<IComponentsProps>(({items}) => {
    const {isCart, setCart} = useContext(CartContext);

    const removeItem = (item: object) => {
        setCart(isCart.filter((removeItem: any[]) => {
            return removeItem !== item;
        }))
    }

    return (
        <Container key={items.id}>
            <RemoveButton onClick={() => removeItem(items)}> X </RemoveButton>

            <p>
                {items.name}
            </p>
            <p>
                {items.price} PLN
            </p>
        </Container>
    )
});

export default CartItems;