import React from "react";
import Navbar from "./Navbar";
import Header from "./BigHeader";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";

function Home() {

return (
    <div>
        <Navbar portfolioId="#projects"/>
        <Header />
        <Projects id="projects" />
        <About />
        <Footer />
    </div>
    );

}


export default Home;