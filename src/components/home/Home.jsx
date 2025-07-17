import React from "react";
import Navbar from "../common/Navbar";
import Header from "../common/BigHeader";
import About from "../about/About";
import Footer from "../common/Footer";
import Projects from "../Projects";
import CustomCursor from "../common/CustomCursor";
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