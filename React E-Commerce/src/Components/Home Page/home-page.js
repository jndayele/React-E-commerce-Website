import React from "react";
import Header from "../Header/header";
import Home from "./home";
import Product from "./product";
import MidSection from "./mid-section";
import Footer from "./footer";

const HomePage = () => {
    return (
        <>
            <Header />
            <Home />
            <Product />
            <MidSection />
            <Footer />
        </>
    )
}


export default HomePage;