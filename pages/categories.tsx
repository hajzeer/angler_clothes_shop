import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../components/Layout'
import {IItems, ILoading} from "../interfaces";
import CategoriesList from "../components/CategoriesList";
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

const CategoriesPage = () => {

    const [category, setCategory] = useState<IItems | any>(Array)
    const [isLoading, setIsLoading] = useState<ILoading | any>(true)

    const url = `https://angler-clothes-shop.herokuapp.com`

    const getCategory = async() => {
        const res = await axios.get(url +`/categories`);
        const data = res.data;

        return setCategory(data), setIsLoading(!isLoading);


    };
    useEffect(() => {


        getCategory();
    }, []);




    return (
            <Layout>
                {isLoading ? (
                    <LoadingScreen/>
                ) : (
                    <Container>
                        <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                        <CategoriesList categories={category}/>
                    </Container>
                )}
            </Layout>

    )
}


export default CategoriesPage
