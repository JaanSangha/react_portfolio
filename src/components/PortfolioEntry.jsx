import React from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

function PortfolioEntry(props) {
    return (
        <div class="col">
        <Link to={props.link}>
          <motion.div class="card shadow-sm" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} data-custom-cursor>
            <img class="rounded" src={props.thumbnail} alt=""/>
            <div class="card-img-overlay">
              <h3 class="card-title">{props.title}</h3>
            </div>
          </motion.div>
        </Link>
        </div>
    );
}

export default PortfolioEntry;