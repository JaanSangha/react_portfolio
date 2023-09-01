import React from "react";
import Cardemon from "./img/CardemonThumbRounded.PNG"
import FFThumb from "./img/FFThumbNailRounded.PNG"
import { Link } from "react-router-dom";

function Projects() {
    return (
        <cards>
        <div>
            <h2>Projects</h2>
        </div>
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

  <div class="col">
    <div class="card shadow-sm" style={{backgroundColor: "#AEC3AE"}}>
     <img src={Cardemon} alt=""/>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <Link to="/projects-cardemon">
            <button type="button" class="btn btn-dark">View</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm" style={{backgroundColor: "#E4E4D0"}}>
    <img src={FFThumb} alt=""/>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <Link to="/projects-cardemon">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            </Link>
          </div>
          <small class="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm" style={{backgroundColor: "#E4E4D0"}}>
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card shadow-sm" style={{backgroundColor: "#E4E4D0"}}>
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div class="card-body" >
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  
</div>

</div>
</cards>

    );
}

export default Projects;