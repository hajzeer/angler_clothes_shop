import React, {useContext} from 'react';
import styled from "styled-components";
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import Layout from '../../components/Layout';

export interface IComponentsProps {
    readonly items: {
        id: number,
        Name: string,
        Description: string,
        Price: number,
        Images: [
            url: string | any
        ],
    }
}

const Container = styled.section`

    width: 100%;
    background: #ffffff;

    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
`;


const ImageDiv = styled.div`
    
    width: 100%;
    height: 55vh;
    background: transparent;
`;


const AboutProductContainer = styled.div`
  
  width: 100%;
  z-index: 2;
  border-radius: 25px 25px 0 0;
  background-color: #e0e0e0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: -5px -20px 50px #626262;
  
  p {
    margin: 20px;
  }
`;

const SubjectStyled = styled.h2`

    text-align: center;

`

const Img = styled.img`
    position: fixed;

    width: 100%;
  height: auto;
  border: none;


`

const ButtonStyled = styled.button`

      padding: 0;
      margin: 20px 0 50px 0;
      
      width: 250px;
      height: 50px;
      border: none;
       border-radius: 25px;
      background: #b0b0b0;
      box-shadow:  5px 5px 10px #969696,
        -5px -5px 10px #cacaca;


      
      cursor: pointer;
      outline: none;
  
  color: #2e2e2e;
  font-family: 'Anonymous Pro', monospace;
  font-size: 20px;
  font-weight: 900;
      
      transition: transform .5s ease-out;
      
      &:hover {

        
        box-shadow:  inset 5px 5px 10px #969696,
          inset -5px -5px 10px #cacaca;
      }

      &:active {
        color: #ffffff;
        box-shadow:  5px 5px 10px #969696,
          -5px -5px 10px #cacaca;
      }
  
  span {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    transition: transform .5s ease-out;
    &:hover {
      transform: scale(0.94);
    }
  }
    `;



const ProductDetail = React.memo<IComponentsProps>(({items}) => {

  const {setCart} = useContext(CartContext)

  const handleAdd = () => {
    let value: number = 1
    
    const products = {
      name: items.Name,
      price: items.Price,
      Images: items.Images[0].url,
      capacity: value,
    }
    setCart((currentState: []) => [...currentState, products])
  }

    return(
      <Layout>
        <Container>
            <ImageDiv>
                <Img src={items.Images[0].url} />
            </ImageDiv>
            <AboutProductContainer>
            <SubjectStyled>{items.Name}</SubjectStyled>
                <p>{items.Description}</p>
                <h2>{items.Price} PLN</h2>
                <ButtonStyled onClick={handleAdd}>
                    <span>
                        Dodaj do koszyka
                    </span>
                </ButtonStyled>
            </AboutProductContainer>
        </Container>
        </Layout>
    )
})


const url = `https://angler-clothes-shop.herokuapp.com`


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(url+`/products/`);
  const items = res.data

  // Get the paths we want to pre-render based on posts
  const paths = items.map((item: { id: string; }) => ({
    params: { id: item.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({params}: any) {
      const res = await axios.get(url+`/products/${params.id}`);
      const items = res.data;

  return {
    props: {
      items
    }
  }
}



export default ProductDetail
