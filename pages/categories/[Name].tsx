import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../../components/Layout'
import ProductsList from "../../components/ProductsList";
import {IItems, ILoading} from "../../interfaces";
import {CategoryContext} from "../../context/categoryContext";
import LoadingScreen from "../../components/LoadingScreen";


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

const ProductPage = () => {

    const [product, setProduct] = useState<IItems | any>(Array)
    const [isLoading, setIsLoading] = useState<ILoading | any>(true)

    const {isCategoryId} = useContext(CategoryContext);

    const url = `http://localhost:1337`;


    const getProduct = async() => {
        const res = await axios.get(url +`/categories`);
        const data = res.data;

        return setProduct(data[isCategoryId].products), setIsLoading(!isLoading);
    };

    useEffect(() => {

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



export default ProductPage
