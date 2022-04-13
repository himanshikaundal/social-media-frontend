import React from "react";
import { Link } from "react-router-dom";
import himanshi from "../assets/images/nav-img/himanshi.jpeg";
import background from "../assets/images/nav-img/background.jpg"

function Profile() {
  return (
    <>
      <div className="container">
        <div class="card w-100" >
          <img src={background} height='100rem' class="w-100 rounded-3" alt="..." />
          <div class="profile text-center">
            <img src={himanshi} class="rounded-circle" width="100rem" />
          </div>
          <div class="card-body text-center  ">
            <p class="card-text h4">Himanshi Kaundal</p>
            <p className="text-muted " > Newly Recruit at TTN </p>
          </div>
          <div className="d-flex justify-content-evenly py-2">

            <div class="stats text-muted text-center">
              <h6 class="mb-0 sm-4">Post Views</h6>
              <span>123</span>
            </div>
            <div className="vr" ></div>
            <div class="stats text-muted text-center">
              <h6 class="mb-0">Post</h6>
              <span>10</span>
            </div>
          </div>

        </div>
      </div>

    </>


  );
}

export default Profile;
