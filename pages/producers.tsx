import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Layout from '../components/Layout'
import {IItems, ILoading} from "../interfaces";
import ProducersList from '../components/ProducersList'
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
    `;


const ProducentsPage = () => {

    const [producer, setProducer] = useState<IItems | any>(Array)
    const [isLoading, setIsLoading] = useState<ILoading | any>(true)

    const url = `http://localhost:1337`;



    const getProducer = async() => {
        const res = await axios.get(url +`/producers`);
        const data = res.data;

        return setProducer(data), setIsLoading(!isLoading);
    };

    useEffect(() => {
        getProducer();
    }, []);




    return (
        <Layout> {
            isLoading ? (
                <LoadingScreen/>
            ) : (
                <Container>
                    <SectionTitle>Sprawdź co mamy w ofercie</SectionTitle>
                    <ProducersList producers={producer}/>
                </Container>
            )
        }

        </Layout>

    )
}


export default ProducentsPage
