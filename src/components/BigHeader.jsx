import React from "react";
import MePic from "./img/Me.png"

function BigHeader() {
    return (
         <header class="p-5 text-center bg-body-tertiary">
            <div class="container py-5">
            <img class="rounded-circle shadow-4-strong" alt="avatar2" src={MePic} />
                <h1>Jaan Sangha</h1>
                <h2 class="col-lg-8 mx-auto lead">
                    Game Programmer / Full Stack Developer
                </h2>
            </div>  
        </header>  
    );
}

export default BigHeader;