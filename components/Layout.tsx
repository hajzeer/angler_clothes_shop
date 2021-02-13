import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled, {createGlobalStyle} from "styled-components";

type Props = {
  children?: ReactNode
  title?: string
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


const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <ContainerLayout>
        <GlobalStyle/>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </ContainerLayout>
)

export default Layout
