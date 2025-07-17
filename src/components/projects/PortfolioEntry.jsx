import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PortfolioEntry(props) {
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed for your mobile breakpoint

  return (
    <div className="col">
      <Link to={props.link}>
        {isMobile ? (
          <div className="card shadow-sm" data-custom-cursor>
            <img className="rounded" src={props.thumbnail} alt={props.title + " thumbnail"} />
            <div className="card-img-overlay">
              <h3 className="card-title">{props.title}</h3>
            </div>
          </div>
        ) : (
          <motion.div
            className="card shadow-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            data-custom-cursor
          >
            <img className="rounded" src={props.thumbnail} alt={props.title + " thumbnail"} />
            <div className="card-img-overlay">
              <h3 className="card-title">{props.title}</h3>
            </div>
          </motion.div>
        )}
      </Link>
    </div>
  );
}

export default PortfolioEntry;
