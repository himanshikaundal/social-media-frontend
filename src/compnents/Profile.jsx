import React from "react";
import { Link } from "react-router-dom";
import himanshi from "../assets/images/nav-img/himanshi.jpeg";
import background from "../assets/images/nav-img/background.jpg"

function Profile() {
  return (
    <div>
      <div class="container d-flex justify-content-center align-items-center">
        <div class="card ">
          <div class="upper">
            
            <img src={background}  height="80rem"  width="300rem"/> 
          </div>
          <div class="user text-center">
            <div class="profile">
              <img src={himanshi} class="rounded-circle" width="90" />
            </div>
          </div>
          <div class="mt-4 text-center px-5">
            <h4 class="mb-0">Himanshi Kaundal</h4>
            <span class="text-muted d-block mb-2">Newly Recruit at TTN</span>
            <div class="d-flex justify-content-between align-items-center mt-4 px-4">
              <div class="stats">
                <h6 class="mb-0">Post Views</h6> 
                <span>123</span>
              </div>
              <div class="stats">
                <h6 class="mb-0">Post</h6> 
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
