import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../../components/Layout'
import ProductsList from "../../components/ProductsList";
import {IItems} from "../../interfaces";
import {ProducerContext} from "../../context/ProducerContext";

const ProductPage = () => {

    const [product, setProduct] = useState<IItems | any>(Array)
    const {isProducerId, setIsProducerId} = useContext(ProducerContext)

    const url = `http://localhost:1337`;

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

    useEffect(() => {
        const getProduct = async() => {
            const res = await axios.get(url +`/producers`);
            const data = res.data;

            console.log(data)
            console.log(isProducerId)
            return setProduct(data[isProducerId].products);
        };
        getProduct();
    }, []);




    return (
            <Layout>
                <Container>
                    <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                    <ProductsList products={product}/>
                </Container>
            </Layout>

    )
}



export default ProductPage
