import React from "react";

function Navbar(props) {
    return (
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand px-4" href="#top"><i class="fa-solid fa-j fa-lg" style={{color: "#ffffff"}}></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ms-auto mb-2 px-2 mb-md-0">
     {/*    <li class="nav-item px-2">
          <a class="nav-link" aria-current="page" href="/">About</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" aria-current="page" href={props.portfolioId}>Portfolio</a>
        </li> */}
        <li class="nav-item px-2">
          <a class="nav-link" aria-current="page" href="https://drive.google.com/file/d/1B71TLalJ4oKROjWo9nPPdBeey4HIDmGC/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;