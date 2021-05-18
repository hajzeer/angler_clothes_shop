import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

interface IComponentsProps {
    readonly items: {
        id: number,
        name: string,
        price: number,
        Images: string | any,
        capacity: number,
    }
}


const Container = styled.section`

width: 100%;
height: 100px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

p {

    font-size: 16px;
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

const ImageStyled = styled.img`

    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: none;
    z-index: 99999;

`
const InnerDiv = styled.div`

    width: 60%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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
            <ImageStyled src={items.Images}/>
            <InnerDiv>
            <p>
                {items.name}
            </p>
            <p>
                {items.price} PLN
            </p>
            <p>ilość: {items.capacity}</p>
            </InnerDiv>
        </Container>
    )
});

export default CartItems;