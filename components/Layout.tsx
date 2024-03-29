import React, {ReactNode, useState, useContext} from 'react'
import Head from 'next/head'
import styled, {createGlobalStyle} from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";
import Cart from "./Cart";
import Footer from "./Footer";
import { CartContext } from '../context/CartContext';

interface Props {
  children?: ReactNode,
}

const ContainerLayout = styled.section`

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  

  
`;

const GlobalStyle = createGlobalStyle`

    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      background-color: #e0e0e0;
      

      font-family: 'Anonymous Pro', monospace;
    }
    
`




const Layout = React.memo<Props>(({ children}) => {

    const [isVisible, setIsVisible] = useState(false)
    const [visibility, setVisibility] = useState(false)

    const {isCart} = useContext(CartContext);

    const handleMenu = () => {
        if(!isVisible) {
            setIsVisible(true);
            setVisibility(false);

        } else {
            setIsVisible(!isVisible);
            setVisibility(false);
        }
    };

    const handleCart = () => {
        if(!visibility) {
            setVisibility(true);
            setIsVisible(false);
        } else {
            setVisibility(!visibility);
            setIsVisible(false);
        }
    };



    return (
            <ContainerLayout>
                <GlobalStyle/>
                <Head>
                  <title>Fishing Clothes | Ubrania dla prawdziwych wędkarzy</title>
                  <meta charSet="utf-8" />
                  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                    <link href={'https://css.gg/spinner-alt.css'} rel='stylesheet'/>
                </Head>
                    <Header menuAnimation={isVisible} isVisible={handleMenu} visibility={handleCart}/>
                    <NavBar isVisible={isVisible} visibility={handleMenu}/>
                    <Cart visibility={visibility} vis={handleCart} items={isCart}/>
                    {children}
                    <Footer/>
            </ContainerLayout>
    )});

export default Layout;
