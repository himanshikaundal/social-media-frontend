import React from "react";
import { useSelector } from "react-redux";
import background from "../assets/images/nav-img/background.jpg";
import himanshi from '../assets/images/nav-img/himanshi.jpeg'

function ViewProfile() {
  const {user}=useSelector(state=>state.loginUser)

  return (
    <>
      <div className="container pt-5 d-flex">
        <div className="row ">
          <div className="col-sm-8 shadow">
            <div className="row h-50 ">
              <img
                src={background}
                height="200px"
                class=" rounded-3"
                alt="..."
              />

              <img src={himanshi}  class="rounded-3 translate-middle-y  sm-4 w-25" alt="..."/>
            </div>

            <div className="row ">
              <div>
                <h2>{user.name}</h2>
                <p>{`${user.name} is inter'2022 @To The New`} </p>
              </div>
              <div className="py-4 ">
                <ul class="list-group list-group-horizontal list-group-flush">
                  <li class="list-group-item">India</li>
                  <li class="list-group-item">Delhi</li>
                  <li class="list-group-item">Noida</li>
                  <li class="list-group-item">234 Friends</li>
                </ul>
              </div>
              <div>
                <button type="button" class="btn btn-primary btn-lg mx-2 ">
                  Add Friend
                </button>
                <button type="button" class="btn btn-outline-primary btn-lg">
                  Visit Website
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div>Suggestions</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
