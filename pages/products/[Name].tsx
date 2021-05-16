import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../../components/Layout'
import {IItems, ILoading} from "../../interfaces";
import LoadingScreen from "../../components/LoadingScreen";
import ProductDetail from "../../components/ProductDetail";
import {ProductContext} from '../../context/ProductContext'


const Container = styled.section`

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  
`;


const ProductDetailPage = () => {

    const [product, setProduct] = useState<IItems | any>(Array)
    const [isLoading, setIsLoading] = useState<ILoading | any>(true)

    const {isProductId} = useContext(ProductContext)


    const url = `https://angler-clothes-shop.herokuapp.com`
    const getProduct = async() => {
        const res = await axios.get(url+`/products/${isProductId}`);
        const data = res.data;
        return setProduct(data), setIsLoading(!isLoading);
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
                    <ProductDetail items={product}/>
                </Container>
            )}
        </Layout>

    )
}



export default ProductDetailPage
