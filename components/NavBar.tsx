import React from 'react';
import styled from 'styled-components';
import {withProps} from '../withProps';

interface IComponentProps {
    readonly isVisible: boolean,
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
    background: #000000;
    z-index: 99;
    color: #fff;
    transform: ${({current}: IStyledProps) => current ? `translateX(100%)` : `translateX(0)`};

   transition: all 0.3s ease-in-out;
`;

const InnerDivStyled = styled.div`

    width: 100%;
    height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`



const NavBar = React.memo<IComponentProps>(({isVisible}) => {



    return (
        <Container current={isVisible}>
            <InnerDivStyled>
                Menu
            </InnerDivStyled>
        </Container>
    )
});

export default NavBar;