import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
    position: absolute;
    width: 100%;
    height: 50vh;
    padding-bottom: 50px;
    background: #2e2e2e;
    color: #ffffff;
    
  p {
    padding: 10px;
  }
  
  a {
    padding: 10px;
  }
    


`


const Footer = () => {

    return(
        <FooterContainer>
            <p>Kontakt: </p>
            <a>+48 123 456 789</a>
            <br/>
            <a>mail@mail.com</a>

            <p>Numer konta:

                <br/>
                00 1111 2222 3333 4444 5555 6666
            </p>
                <p>
                Polityka prywatności: <br/>
            © {new Date().getFullYear()} Created by hiThere Studio for Fishing Clothes <br/>
            All rights reserveds
                </p>
        </FooterContainer>
    )
}

export default Footer;