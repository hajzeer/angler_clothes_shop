import React, { ReactNode, useState } from 'react'
import Head from 'next/head'
import styled, {createGlobalStyle} from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode
}

const ContainerLayout = styled.section`
  background-color: #e0e0e0;

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




const Layout = ({ children}: Props) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        if(isVisible === false) {
            setIsVisible(true)
        } else {
            setIsVisible(!isVisible)
        }
        console.log(isVisible)
    }


    return (
    <ContainerLayout>
        <GlobalStyle/>
    <Head>
      <title>Fishing Clothes | Ubrania dla prawdziwych wędkarzy</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Head>
        <Header isVisible={handleClick}/>
        <NavBar isVisible={isVisible}/>
    {children}
    <footer>
      <br />
      <span>Polityka prywatności: <br/>
            © 2020 Created by hiThere Studio for Fishing Clothes <br/>
            All rights reserveds
      </span>
    </footer>
  </ContainerLayout>
    )}

export default Layout
