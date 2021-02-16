import React from 'react';
import styled from 'styled-components';

interface IComponentsProps {
    readonly items: {
        id: number,
        Name: string,
        Image: string,
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


const SpanStyled = styled.span`
      display: flex;
      flex-direction: column;
      transition: transform .4s ease-out;
      &:hover {
        transform: scale(.98);
        

      }
    `;



const Categories = React.memo<IComponentsProps>(({items}) => {

    return (
        <Container>
            <SpanStyled>
                <ImageStyle src={`http://localhost:1337` + items.Image.url}/>
            <TitleStyle>{items.Name}</TitleStyle>
            </SpanStyled>
        </Container>
        )
});

export default Categories