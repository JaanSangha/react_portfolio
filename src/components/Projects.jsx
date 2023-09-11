import React, { useState } from "react";
import PortfolioEntry from "./PortfolioEntry"
import Games from "../games"
import Applications from "../applications"

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
              <button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(0)}>Games</button>
              <button type="button" class="btn btn-outline-dark mx-2" onClick={() => handleClick(1)}>Applications</button>
            </div>
        </div>
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
{portfolioSection === 0 && Games.map(createEntry)}
{portfolioSection === 1 && Applications.map(createEntry)}
  
</div>
</div>
</cards>

    );
}

export default Projects;