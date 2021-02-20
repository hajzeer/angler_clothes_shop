import React from "react";
import styled from "styled-components";

const LoadingStyled = styled.section`
    
        width: 100%;
        height: 100vh;
      font-size: 50px;

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  
  i {
    align-self: center;
    width: 50px;
    height: 50px;
  }
    
`;

const LoadingScreen = () => {
    return (
        <LoadingStyled>
            <i className="gg-spinner-alt"/>
        </LoadingStyled>
    )
}

export default LoadingScreen;