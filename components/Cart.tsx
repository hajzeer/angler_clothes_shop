import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import CartItems from '../components/CartItems';
import { CartContext } from '../context/CartContext';
import {IItemsOfCart} from '../interfaces/index';

interface IComponentProps {
    readonly visibility: boolean,
    readonly vis: () => void,
    readonly items: Array<IItemsOfCart>,
}
interface IStyledProps {
    readonly  current?: boolean,
}

const Container = styled.section<IStyledProps>`

    position: fixed;
        width: 100%;
    height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
    background: #2e2e2e;
    z-index: 999;
    color: #fff;
    transform: ${props => props.current ? `translateX(0)` : `translateX(-100%)`};

   transition: all 0.3s ease-in-out;


   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
`;

const InnerDivStyled = styled.div`

padding: 20px 0;
    width: 90%;
    height: 60vh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`

const FinalDivStyled = styled.div`

width: 100%;
height: 30vh;
padding: 20px; 
display: flex;
  flex-direction: row;
  justify-content: space-around;

`

const ButtonStyled = styled.button`
      
      padding: 0;
      width: 100px;
      height: 50px;
      border: none;
       border-radius: 25px;
      background: #b0b0b0;
      box-shadow:  5px 5px 10px #808080,
          -5px -5px 10px #808080;
      cursor: pointer;
      outline: none;
  
  color: #2e2e2e;
  font-family: 'Anonymous Pro', monospace;
  font-size: 20px;
  font-weight: 900;
      
      transition: transform .5s ease-out;
      
      &:hover {

        
        box-shadow:  inset 5px 5px 10px #969696,
          inset -5px -5px 10px #cacaca;
      }

      &:active {
        color: #ffffff;
        box-shadow:  5px 5px 10px #969696,
          -5px -5px 10px #cacaca;
      }
  
  span {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    transition: transform .5s ease-out;
    &:hover {
      transform: scale(0.94);
    }
  }
    `;


const Cart = React.memo<IComponentProps>(({visibility, items}) => {
    const {isCart} = useContext(CartContext);
    const [isFinalPrice, setIsFinalPrice] = useState(0);

    useEffect(() => {
        let total: number = 0;
       for(let el in isCart) {
            total += isCart[el].price
            const value: number = parseFloat(total.toFixed(2));
            setIsFinalPrice(value);

                

            
       }
    })
    return (
        <Container current={visibility}>
            
            <InnerDivStyled>
            {isCart.length === 0 ? (
                <p>
                    Twój koszyk jest pusty
                </p>
            ) : (
                
                
                    items.map(item => {
                        return (
                            <CartItems items={item} key={item.id}/>
                        )})
                
            )
            }
            
            </InnerDivStyled>
            <FinalDivStyled>
                {isCart.length === 0 ? (
                    <p>
                        0.00 PLN
                    </p>
                ) : (
                    <p>
                    {isFinalPrice} PLN
                    </p>
                )}
                <ButtonStyled>
                    <span>
                        Zamów
                    </span>
                </ButtonStyled>
            </FinalDivStyled>
        </Container>
    )
});

export default Cart;