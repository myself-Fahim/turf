import React from "react";
// import logoImg from "../../../../images/logo 5.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fw-bold bg-transparent">
        <div class="container-fluid">
          <a 
          class="navbar-brand text-black my-3 ms-4 fs-5 fw-bolder shadow-lg p-3 mb-5 bg-body-tertiary rounded"
          >TURF TIME</a>
          {/* <img src={logoImg} width="3%"></img> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              {/* <li class="nav-item">
                <a class="nav-link active text-dark " aria-current="page">
                  Home
                </a>
              </li> */}
              <a class="nav-link text-dark" href="#">
                Home
              </a>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Turf Details</a> */}
                <Link class="nav-link text-dark" to="/turf_details">
                  Turf_Details
                </Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Login</a> */}
                <Link class="nav-link text-dark" to="/login">
                  Login
                </Link>
              </li>
              {/* <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
