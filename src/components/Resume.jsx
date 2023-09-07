import React from "react";
import JaanResume from "./JAAN_SANGHA _2023.pdf"

function Resume(){
     var resume = JaanResume + "#view=fitH";
    return(
        <div className="resume">
        <h1>My CV</h1>
        <iframe title="Resume" src={resume} width="70%" height="1180px">
        </iframe>
    </div>
    );

}

export default Resume;