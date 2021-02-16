import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../components/Layout'
import {IItems} from "../interfaces";
import ProducersList from '../components/ProducersList'

const ProducentsPage = () => {

    const [producer, setProducer] = useState<IItems | any>(Array)

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

        const getProducer = async() => {
            const res = await axios.get(url +`/producers`);
            const data = res.data;

            console.log(data)
            return setProducer(data);
        };

        getProducer();
    }, []);




    return (
        <Layout>
            <Container>
                <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                <ProducersList producers={producer}/>
            </Container>
        </Layout>

    )
}


export default ProducentsPage
