import React from "react";
import Cardemon from "./img/CardemonThumbRounded.PNG"
import FFThumb from "./img/FFThumbNailRounded.PNG"
import RCThumb from "./img/RCThumbRounded.jpg"
import CGThumb from "./img/CarGamePic.PNG"
import RRThumb from "./img/RaceThumbnail.png"
import ARThumb from "./img/ARBookcase2Edit.jpg"
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
      <h3 className="centered">Cardemon</h3>
        <p class="card-text">I am currently working on creating a turn based monster catching game that also includes classic RPG combat styles as well as farming and crafting.</p>
        <div class="d-flex justify-content-center align-items-center">
          <Link to="/projects-cardemon">
            <button type="button" class="btn btn-dark">View</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm" style={{backgroundColor: "#E4E4D0"}}>
    <img src={RCThumb} alt=""/>
      <div class="card-body">
      <h3 className="centered">Roly Controly</h3>
        <p class="card-text">I am currently working on creating a mobile game focused on tilt-controls. This game is expected to release this fall on the Play Store.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <Link to="/projects-rolycontroly">
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
    <img src={FFThumb} alt=""/>
      <div class="card-body">
      <h3 className="centered">Flooded Fox</h3>
        <p class="card-text">I created a game using Unity with the theme "Running out of space" for a game jam in one day. The player must avoid the rising water level and make it to the rescue vehicle.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <Link to="/projects-floodedfox">
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
    <img src={CGThumb} alt=""/>
      <div class="card-body" >
      <h3 className="centered">Car Battle</h3>
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
    <img src={RRThumb} alt=""/>
      <div class="card-body" >
      <h3 className="centered">Reckless Rubber</h3>
        <p class="card-text">Created a game using Unity for a game jam with the theme "10 Seconds". The player must prepare thier car and then race around the track and hit each checkpoint within 10 seconds.</p>
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
    <img src={ARThumb} alt=""/>
      <div class="card-body" >
      <h3 className="centered">AR Objects App</h3>
        <p class="card-text">Created an app with AR Core that enables the user to place diferent types of 3D furniture or items in any room they want using the camera on their phone.</p>
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