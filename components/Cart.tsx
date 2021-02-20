import React from 'react';
import styled from 'styled-components';
import {withProps} from '../withProps';
import {IStyledProps} from "../interfaces";

interface IComponentProps {
    readonly visibility: boolean,
    readonly vis: void
}


const Container = withProps<IStyledProps>()(styled.section)`
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
    transform: ${({current}: IStyledProps) => current ? `translateX(0)` : `translateX(-100%)`};

   transition: all 0.3s ease-in-out;
`;

const InnerDivStyled = styled.div`

    width: 100%;
    height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`



const Cart = React.memo<IComponentProps>(({visibility}) => {



    return (
        <Container current={visibility} display={visibility}>
            <InnerDivStyled>
                Cart

            </InnerDivStyled>
        </Container>
    )
});

export default Cart;