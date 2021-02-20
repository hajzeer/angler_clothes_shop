import React, {useContext} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {CategoryContext} from "../context/categoryContext";


interface IComponentsProps {
    readonly items: {
        id: number,
        Name: string,
        Image: {
            url: string
        },
    },


}


const Anchor = styled.a`
  
    width: 100%;
    text-decoration: none;
    color: #000000;

`;

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
    color: #000000;
    text-decoration: none;
    
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


    const {setIsCategoryId} = useContext(CategoryContext)

    const handleClick = () => {
        const id: number = items.id - 1;
        setIsCategoryId(id)
    }

    return (
                  <Container>
                      <Link href={`/categories/${items.Name}`}>
                          <Anchor onClick={handleClick}>
                          <SpanStyled>
                            <ImageStyle src={`http://localhost:1337` + items.Image.url}/>
                            <TitleStyle>{items.Name}</TitleStyle>
                        </SpanStyled>
                          </Anchor>
                      </Link>
                    </Container>

    )
});

export default Categories