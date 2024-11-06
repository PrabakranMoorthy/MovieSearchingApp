import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-dark text-white" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="Imdb icon"
            width="30"
            height="24"
            className="d-inline-block align-text-top mx-2"
          />
          Movie Searching App
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
