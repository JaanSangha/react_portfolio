import React from "react";
import MePic from "./img/meabout.jpg"

function About()
{
    return(
        <div className="toppadding">
        <h1 className="centered">About Me</h1>
            <div className="container py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 text-center">
                            <img id="aboutpic" className="rounded shadow-4-strong" alt="avatar2" src={MePic} />
                        </div>
                        <div className="cl-12 col-lg-6">
                            <p className="text-md-start">Hello my name is Jaan and I’m a software developer based in Toronto. I hold an advanced diploma in Game Programming from George Brown College and am currently completing my Software Engineering degree at McMaster University. Over the past few years, I’ve built a strong foundation in software development through academic projects, freelance work, and contract roles. </p>
                            <p className="text-md-start">I have a particular interest in developing intuitive, user-friendly front-end experiences paired with clean, efficient backend systems. I enjoy working across the full stack and am always eager to expand my skill set by learning new technologies, frameworks, and tools. </p>
                            <p className="text-md-start">Outside of coding, you’ll find me playing soccer, exploring new restaurants, or hiking through Ontario’s trails. I value work that challenges me, a team that inspires me, and projects that make a real impact.</p>
                        </div>
                    </div>
                </div>
            </div>   
    </div>
    )
}

export default About;