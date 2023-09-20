import React from "react";
import MePic from "./img/meabout.jpg"

function About()
{
    return(
        <div className="toppadding">
        <h1 className="centered">About Me</h1>
            <div class="container py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-6 text-center">
                            <img id="aboutpic" class="rounded shadow-4-strong" alt="avatar2" src={MePic} />
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-6">
                            <p class="text-md-start">Hello, my name is Jaan and I am a developer based out of Toronto, Canada. </p>
                            <p class="text-md-start">I recently graduated from George Brown College and have been improving my skills by taking bootcamp courses and creating exciting projects. I am currently looking for a junior full stack developer position where I can learn even more. I have done some contract work for start ups and freelance work as well. </p>
                            <p class="text-md-start">I really enjoy to create intuitive, user-friendly front end designs and clean efficient backend applications. Learning new frameworks and technoligies really excites me and I feel a great sense of accomplishment when I implement them.</p>
                            <p class="text-md-start">When I'm not coding I really enjoy playing sports like soccer and trying new restaurants! I also love to go for hikes and enjoy the outdoors. </p>
                        </div>
                    </div>
                </div>
            </div>   
    </div>
    )
}

export default About;