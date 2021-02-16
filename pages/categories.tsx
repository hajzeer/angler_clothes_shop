import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../components/Layout'
import {IItems} from "../interfaces";
import CategoriesList from "../components/CategoriesList";

const CategoriesPage = () => {

    const [category, setCategory] = useState<IItems | any>(Array)

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

        const getCategory = async() => {
            const res = await axios.get(url +`/categories`);
            const data = res.data;

            console.log(data)

            return setCategory(data);
        };

        getCategory();
    }, []);




    return (
        <Layout>
            <Container>
                <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                <CategoriesList categories={category}/>
            </Container>
        </Layout>

    )
}


export default CategoriesPage
