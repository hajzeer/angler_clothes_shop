import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.header`
  
  position: fixed;
   bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  
  width: 100%;
  height: 60px;

  background: rgba(224, 224, 224, .5);
  border: none;
  backdrop-filter: blur(5px);
  
  z-index: 999999;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;



const ButtonStyled = styled.button`
    position: relative;
    width: 50%;
    height: 100%;
    background: transparent;
    border: none;
  outline: none;
  padding: 0;
  margin: 0;
  
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999;

`;

const HamburgerSpan1 = styled.span`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 45%;
  
  width: 35px;
  height: 3px;
  background: #3b3b3b;
  border-radius: 25px;
  
`;

const HamburgerSpan2 = styled.span`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 60%;
  
  width: 35px;
  height: 3px;
  background: #3b3b3b;
  border-radius: 25px;
  
  
`;


const CartLength = styled.div`
    
  position: absolute;
  top: 20px;
  left: 100px;
  
  width: 17px;
  height: 17px;
  background: #ffffff;
  
  border-radius: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  
  p {
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: center;
    align-self: center;
    justify-self: center;

    font-family: 'Anonymous Pro', monospace;
    color: #000;
    font-weight: 900;
    font-size: 16px;
    
    transform: rotate(15deg);
  }

`

interface IProps {
    readonly isVisible: () => void,
    readonly visibility: () => void
}

const Header = React.memo<IProps>(({isVisible, visibility}) => {



    return (
        <Container>
            <ButtonStyled onClick={visibility}>
                <Image
                    src='/cart.svg'
                    layout='fixed'
                    width={30}
                    height={30}
                    quality={75}
                />
                <CartLength>
                    <p>1</p>
                </CartLength>
            </ButtonStyled>
            <ButtonStyled onClick={isVisible}>
                <HamburgerSpan1/>
                <HamburgerSpan2/>
            </ButtonStyled>
        </Container>
    )
});


export default Header;