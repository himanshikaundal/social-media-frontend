import React from "react";

import himanshi from "../assets/images/nav-img/himanshi.jpeg";
import background from "../assets/images/nav-img/background.jpg"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Profile() {
  const { user } = useSelector(state => state.loginUser)
  return (
    <>
      <div className="container sm-4">
        <div class="card w-100 h-25 sm-4" >
          <img src={background} height='200rem' class="w-100  rounded-3" alt="..." />
          <div class="profile text-center sm-4 ">
          <Link to='/viewProfile'><img src={himanshi} alt='' class="rounded-circle sm-4 translate-middle-y w-50 sm-4"  /></Link>  
          </div>
          <div class="card-body sm-4 text-center translate-middle-y ">
            <p class="card-text  sm-4 h4">{user.name}</p>
            <p className="text-muted sm-4 " > Newly Recruit at TTN </p>
          </div>
          <div className="d-flex justify-content-evenly  py-2">

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
