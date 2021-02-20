
import type { AppProps } from 'next/app'
import {CategoryProvider} from "../context/categoryContext";
import {ProducerProvider} from "../context/ProducerContext";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CategoryProvider>
            <ProducerProvider>
            <Component {...pageProps} />
            </ProducerProvider>
        </CategoryProvider>
    )
}



export default MyApp