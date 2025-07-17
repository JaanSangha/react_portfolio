import React, { useState } from "react";
import PortfolioEntry from "./projects/PortfolioEntry";
import Games from "../games"
import Applications from "../applications"
import Websites from "../websites";

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
  const [portfolioSection, setPortfolioSection] = useState(0);

  function handleClick(id) {
    setPortfolioSection(id);
  }

    return (
        <div>
        <div className="centered">
            <h1 className="projects-title">Projects</h1>
            <div className="defaultoutlinebutton">
              {portfolioSection ===0 && <button type="button" className="btn btn-outline-dark mx-2 active" onClick={() => handleClick(0)} data-custom-cursor>Applications</button>}
              {portfolioSection ===0 &&<button type="button" className="btn btn-outline-dark mx-2" onClick={() => handleClick(1)} data-custom-cursor>Websites</button>}
              {portfolioSection ===0 &&<button type="button" className="btn btn-outline-dark mx-2" onClick={() => handleClick(2)} data-custom-cursor>Games</button>}

              {portfolioSection ===1 && <button type="button" className="btn btn-outline-dark mx-2" onClick={() => handleClick(0)} data-custom-cursor>Applications</button>}
              {portfolioSection ===1 &&<button type="button" className="btn btn-outline-dark mx-2 active" onClick={() => handleClick(1)} data-custom-cursor>Websites</button>}
              {portfolioSection ===1 &&<button type="button" className="btn btn-outline-dark mx-2" onClick={() => handleClick(2)} data-custom-cursor>Games</button>}

              {portfolioSection ===2 && <button type="button" className="btn btn-outline-dark mx-2" onClick={() => handleClick(0)} data-custom-cursor>Applications</button>}
              {portfolioSection ===2 &&<button type="button" className="btn btn-outline-dark mx-2" onClick={() => handleClick(1)} data-custom-cursor>Websites</button>}
              {portfolioSection ===2 &&<button type="button" className="btn btn-outline-dark mx-2 active" onClick={() => handleClick(2)} data-custom-cursor>Games</button>}
            </div>
        </div>
<div className="container">

<div className="projects-grid">
{portfolioSection === 0 && Applications.map(createEntry)}
{portfolioSection === 1 && Websites.map(createEntry)}
{portfolioSection === 2 && Games.map(createEntry)}
  
</div>
</div>
</div>

    );
}

export default Projects;