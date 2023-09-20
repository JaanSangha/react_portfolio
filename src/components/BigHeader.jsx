import React from "react";
import MePic from "./img/grad.jpg"

function BigHeader() {
    return (
        <div className="toppadding">
            <header class="p-5">
                <div class="container py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-6 text-center">
                                <img class="rounded-circle shadow-4-strong" alt="avatar2" src={MePic} />
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-6 my-auto">
                                <h1 class="text-md-start">Jaan Sangha</h1>
                                <h2 class="text-md-start">Game Programmer / Full Stack Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>  
            </header>     
        </div>
    );
}

export default BigHeader;