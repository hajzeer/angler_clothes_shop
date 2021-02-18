import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {withProps} from '../withProps';

interface IComponentProps {
    readonly isVisible: boolean,
    readonly visibility: void
}
interface IStyledProps {
    readonly  current: any,
}

const Container = withProps<IStyledProps>()(styled.section)`
    position: fixed;
        width: 100%;
    height: 100vh;
    top: 0;
  left: 0;
  margin: 0;
  padding: 0;
    background: #2e2e2e;
    z-index: 99;
    color: #fff;
    transform: ${({current}: IStyledProps) => current ? `translateX(0)` : `translateX(100%)`};

   transition: all 0.3s ease-in-out;
`;

const InnerDivStyled = styled.div`

    width: 100%;
    height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const LinkStyled = styled(Link)`

  
    
      align-self: flex-start;
  z-index: 999;
    


`;

const Anchor = styled.a`
  margin: 15px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 25px;
  cursor: pointer;



`;





const NavBar = React.memo<IComponentProps>(({isVisible,visibility}) => {



    return (
        <Container current={isVisible} display={isVisible}>
            <InnerDivStyled>
                <LinkStyled href='/'>
                    <Anchor onClick={visibility}>STRONA GŁÓWNA</Anchor>
                </LinkStyled>
                <LinkStyled href='/products'>
                    <Anchor onClick={visibility}>PRODUKTY</Anchor>
                </LinkStyled>
                <LinkStyled href='/categories'>
                    <Anchor onClick={visibility}>KATEGORIE</Anchor>
                </LinkStyled>
                <LinkStyled href='/producers'>
                    <Anchor onClick={visibility}>PRODUCENCI</Anchor>
                </LinkStyled>
                <LinkStyled href='/about'>
                    <Anchor onClick={visibility}>O NAS</Anchor>
                </LinkStyled>
                <LinkStyled href='/rules'>
                    <Anchor onClick={visibility}>REGULAMIN</Anchor>
                </LinkStyled>
            </InnerDivStyled>
        </Container>
    )
});

export default NavBar;