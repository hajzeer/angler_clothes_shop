import React from 'react';
import styled from "styled-components";


import Image from "next/image";

const Container = styled.section`
  position: relative;
    width: 100%;
    height: 100vh;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    background: rgba(0, 0, 0, .6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
  };
`;


const TitleStyled = styled.h1`
    
    z-index: 3;
    color: #ffffff;    
    font-size: 25px;
  font-weight: 900;
`;

const ParagraphStyled = styled.p`
    margin: 0 30px 0 30px;
    z-index: 3;
    color: #ffffff;
    font-family: 'Anonymous Pro', monospace;
    font-size: 25px;
  font-weight: 900;
`;

const ImageStyle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 200px;
  height: 75px;
  background: #fff;
  z-index: 3;
    `;

const FocusSpanStyled = styled.span`
  
  background: #ffffff;
  color: #000000;
  padding: 3px;
  box-shadow:  20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;

`


const Hero = () => {
    return (
        <Container>
            <Image
                src='/HeroImage.png'
                alt="HeroImage"
                layout="fill"
                objectFit='cover'
                quality={75}
            />
            <ImageStyle src='logo.jpg' alt='logo'/>
            <TitleStyled>
                Urban Fishing Original
            </TitleStyled>
            <ParagraphStyled>
                Czuj się <FocusSpanStyled>wyróżniony</FocusSpanStyled> nad każdą wodą z ubraniami od
                <br/>
                <FocusSpanStyled>UFO</FocusSpanStyled>.
            </ParagraphStyled>
        </Container>
    )
}

export default Hero