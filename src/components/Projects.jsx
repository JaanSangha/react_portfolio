import React from "react";
import {motion} from "framer-motion";
import Cardemon from "./img/CardemonThumbRounded.PNG";
import FFThumb from "./img/FFThumbNailRounded.PNG";
import RCThumb from "./img/RCThumbRounded.jpg";
import CGThumb from "./img/CarGamePic.PNG";
import RRThumb from "./img/RaceThumbnail.png";
import ARThumb from "./img/ARBookcase2Edit.jpg";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <cards>
        <div>
            <h1 className="centered">Projects</h1>
        </div>
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

  <div class="col">
    <Link to="/projects-cardemon">
      <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }}>
        <img class="rounded" src={Cardemon} alt=""/>
        <div class="card-img-overlay">
          <h3 class="card-title">Cardemon</h3>
        </div>
      </motion.div>
    </Link>
  </div>

  <div class="col">
    <Link to="/projects-rolycontroly">
      <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }}>
        <img class="rounded" src={RCThumb} alt=""/>
        <div class="card-img-overlay">
          <h3 className="centered">Roly Controly</h3>
        </div>
      </motion.div>
    </Link>
  </div>

  <div class="col">
    <Link to="/projects-floodedfox">
      <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }}>
        <img src={FFThumb} alt=""/>
        <div class="card-img-overlay">
          <h3 className="centered">Flooded Fox</h3>
        </div>
      </motion.div>
    </Link>
  </div>

  <div class="col">
    <Link to="/projects-carbattle">
      <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }}>
        <img src={CGThumb} alt=""/>
        <div class="card-img-overlay" >
          <h3 className="centered">Car Battle</h3>
        </div>
      </motion.div>
    </Link>
  </div>
  
  <div class="col">
    <Link to="/projects-recklessrubber">
      <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }}>
        <img src={RRThumb} alt=""/>
        <div class="card-img-overlay" >
          <h3 className="centered">Reckless Rubber</h3>
        </div>
      </motion.div>
    </Link>
  </div>

  <div class="col">
    <Link to="/projects-arapp">
      <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }}>
        <img src={ARThumb} alt=""/>
        <div class="card-img-overlay" >
          <h3 className="centered">AR Objects App</h3>
        </div>
      </motion.div>
    </Link>
  </div>
  
</div>
</div>
</cards>

    );
}

export default Projects;