import React from "react";
import Navbar from "./Navbar";
import Header from "./BigHeader";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import CustomCursor from './CustomCursor';
import Comic from "./Comic";

function Home() {

return (
    <div>
        <Navbar portfolioId="#projects"/>
        <Header />
        <Projects id="projects" />
        <About />
        <Comic />
        <Footer />
        <CustomCursor />
    </div>
    );

}


export default Home;