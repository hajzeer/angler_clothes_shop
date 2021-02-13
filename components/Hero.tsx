import React from 'react';
import styled from "styled-components";

import Image from "next/image";

const Container = styled.section`
    
    width: 100%;
    height: 100vh;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  


`;



const Hero = () => {
    return (
        <Container>
            <Image
                src={`/HeroImage.png`}
                alt="HeroImage"
                layout="responsive"
                width={600}
                height={100}

            />
            <h1>Fishing Clothes 4 everyone 👋</h1>
        </Container>
    )
}

export default Hero