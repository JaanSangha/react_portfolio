import React, { useState } from "react";
import PortfolioEntry from "./PortfolioEntry"
import Games from "../games"
import Applications from "../applications"
import Websites from "../websites";
import "../styles.css";

var portfolioSection = 0;

function createEntry(entry){
  return (
    <PortfolioEntry 
      key={entry.id}
      title={entry.title}
      thumbnail={entry.thumbnail}
      link={entry.link}
    />
  );
}

function Projects() {
  const[count, setCount] = useState(0);

  function handleClick(id) {
    portfolioSection = id;
    
    setCount(count + 1);
  }

    return (
        <cards>
        <div className="centered">
            <h1>Projects</h1>
            <div className="defaultoutlinebutton">
              {portfolioSection ===0 && <button type="button" class="btn btn-outline-dark mx-2 active" onClick={() => handleClick(0)} data-custom-cursor>Games</button>}
              {portfolioSection ===0 &&<button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(1)} data-custom-cursor>Applications</button>}
              {portfolioSection ===0 &&<button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(2)} data-custom-cursor>Websites</button>}

              {portfolioSection ===1 && <button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(0)} data-custom-cursor>Games</button>}
              {portfolioSection ===1 &&<button type="button" class="btn btn-outline-dark mx-2 active" onClick={() => handleClick(1)} data-custom-cursor>Applications</button>}
              {portfolioSection ===1 &&<button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(2)} data-custom-cursor>Websites</button>}

              {portfolioSection ===2 && <button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(0)} data-custom-cursor>Games</button>}
              {portfolioSection ===2 &&<button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(1)} data-custom-cursor>Applications</button>}
              {portfolioSection ===2 &&<button type="button" class="btn btn-outline-dark mx-2 active" onClick={() => handleClick(2)} data-custom-cursor>Websites</button>}
            </div>
        </div>
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
{portfolioSection === 0 && Games.map(createEntry)}
{portfolioSection === 1 && Applications.map(createEntry)}
{portfolioSection === 2 && Websites.map(createEntry)}
  
</div>
</div>
</cards>

    );
}

export default Projects;