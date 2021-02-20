import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../components/Layout'
import ProductsList from "../components/ProductsList";
import {IItems, ILoading} from "../interfaces";
import LoadingScreen from "../components/LoadingScreen";



const Container = styled.section`
  background-color: #e0e0e0;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  
`;

const SectionTitle = styled.h2`
    
        text-align: center;
    `


const ProductsPage = () => {

    const [product, setProduct] = useState<IItems | any>(Array)
    const [isLoading, setIsLoading] = useState<ILoading | any>(true)

    const url = `http://localhost:1337`;

    useEffect(() => {

        const getProduct = async() => {
            const res = await axios.get(url +`/products`);
            const data = res.data;

            return setProduct(data), setIsLoading(!isLoading);
        };

        getProduct();
    }, []);




    return (
        <Layout>
            {isLoading ? (
                <LoadingScreen/>
            ) : (
                <Container>
                    <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                    <ProductsList products={product}/>
                </Container>
            )}

        </Layout>

    )
}



export default ProductsPage
