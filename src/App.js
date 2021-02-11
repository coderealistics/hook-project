import React from "react";
import BigText from "./components/BigText";
import Blog from "./components/Blog";
import { FeaturedBlog } from "./components/FeaturedBlog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ProductOptions from "./components/ProductOptions";
import Slider from "./components/Slider";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Header />
            <Hero/>
            <Features/>
            <Slider/>
            <BigText/>
            <ProductOptions/>
            <Pricing/>
            <Testimonials/>
            <FeaturedBlog/>
            <Blog/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default App;
