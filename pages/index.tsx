import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../components/Layout'
import ProductsList from "../components/ProductsList";
import {IItems} from "../interfaces/index";
import Hero from "../components/Hero";

const IndexPage = () => {

    const [product, setProduct] = useState<IItems | any>(Array)

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
            const res = await axios.get(url +`/products`);
            const data = res.data;

            console.log(data)
            return setProduct(data);
        };

        getProduct();
    }, []);




    return (
        <Layout>
            <Container>
                <Hero/>
                <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                <ProductsList products={product}/>
            </Container>
        </Layout>

    )
    }



export default IndexPage
