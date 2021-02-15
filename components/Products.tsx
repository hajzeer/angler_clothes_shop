import React from 'react';
import styled from 'styled-components';

interface IComponentsProps {
    readonly items: {
        id: number,
        Name: string,
        producer: string,
        Price: number,
        Images: string,
    }
}

const Container = styled.section`
      
      margin: 50px 0 0 0;
      padding: 0;
      
      width: 80%;
      height: 500px;
      border-radius: 50px;
      background: #e0e0e0;
      box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
      
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      
      
      &:hover { 
        box-shadow: inset  20px 20px 60px #bebebe,
                    inset -20px -20px 60px #ffffff;
      }
    `;

const ImageStyle = styled.img`
    width: 80%;
      height: auto;
      
      align-self: center;
      
    `;

const TitleStyle = styled.h2`
    text-align: center;
    
    `

const PriceStyle = styled.p`
      text-align: center;
      font-size: 22px;
      font-weight: 900;
        
    `;

const SpanStyled = styled.span`
      display: flex;
      flex-direction: column;
      transition: transform .4s ease-out;
      &:hover {
        transform: scale(.98);
        

      }
    `;

const ButtonStyled = styled.button`
        position: relative;
      padding: 0;
      margin: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      z-index: 9;
      
      bottom: 2em;
      right: 2em;
      width: 50px;
      height: 50px;
      border: none;
      
      align-self: flex-end;
      border-radius: 150px;
      background: #b0b0b0;
      box-shadow:  5px 5px 10px #969696,
        -5px -5px 10px #cacaca;


      
      cursor: pointer;
      outline: none;
      
      transition: transform .5s ease-out;
      
      &:hover {
        transform: scale(0.94);
        box-shadow:  inset 5px 5px 10px #969696,
          inset -5px -5px 10px #cacaca;
      }

      &:active {
        color: white;
        box-shadow:  5px 5px 10px #969696,
          -5px -5px 10px #cacaca;
      }
    `;

const ButtonSpanStyled = styled.span`
      
      text-align: center;
      vertical-align: center;
      position: relative;

      font-weight: 900;
      font-size: 30px;
    
    `



const Products = React.memo<IComponentsProps>(({items}) => {

    return (
        <Container>
            <SpanStyled>
            <TitleStyle>{items.Name}</TitleStyle>
            <ImageStyle src={`http://localhost:1337` + items.Images[0].url}/>
            <PriceStyle>{items.Price} PLN</PriceStyle>
                <ButtonStyled>
                <ButtonSpanStyled>+</ButtonSpanStyled>
                </ButtonStyled>
            </SpanStyled>
        </Container>
        )
});

export default Products