import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../../components/Layout'
import ProductsList from "../../components/ProductsList";
import {IItems} from "../../interfaces";
import {CategoryContext, CategoryProvider} from "../../context/categoryContext";

const ProductPage = () => {

    const [product, setProduct] = useState<IItems | any>(Array)
    const {isCategoryId, setIsCategoryId} = useContext(CategoryContext);

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
            const res = await axios.get(url +`/categories`);
            const data = res.data;

            console.log(data)
            console.log(isCategoryId)
            return setProduct(data[isCategoryId].products);
        };

        getProduct();
    }, []);




    return (
        <CategoryProvider>
        <Layout>
            <Container>
                <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                <ProductsList products={product}/>
            </Container>
        </Layout>
        </CategoryProvider>

    )
}



export default ProductPage
