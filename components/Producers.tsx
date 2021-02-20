import React, {useContext} from 'react';
import styled from 'styled-components';
import Link from "next/link";
import {ProducerContext} from "../context/ProducerContext";

interface IComponentsProps {
    readonly items: {
        id: number,
        Name: string,
        Logo: {
            url: string
        },
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

      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
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

const Anchor = styled.a`
  
    width: 100%;
    text-decoration: none;
    color: #000000;

  
    
`;



const Producers = React.memo<IComponentsProps>(({items}) => {

    const {setIsProducerId} = useContext(ProducerContext)

    const handleClick = () => {
        const id: number = items.id - 1;
        setIsProducerId(id)
    }

    return (
        <Container>
        <Link href={`/producers/${items.Name}`}>
            <Anchor  onClick={handleClick}>

                    <SpanStyled>
                    <TitleStyle>{items.Name}</TitleStyle>
                    <ImageStyle src={`http://localhost:1337` + items.Logo.url}/>
                    </SpanStyled>
            </Anchor>
        </Link>
        </Container>
        )
});

export default Producers