import React from "react";
import background from "../assets/images/nav-img/background.jpg";
import himanshi from "../assets/images/nav-img/himanshi.jpeg";

function SelfView() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <img src={background} height="200px" class=" rounded-3" alt="..." />

            <img
              src={himanshi}
              class="rounded-3 translate-middle-y w-25"
              alt="..."
            />
          </div>

          <div className="row">
            <h2 className="translate-middle-y py-3">Himanshi Kaundal</h2>
            <div className="col-sm-6">
              <form>
                <div className="d-flex parent ">
                  <div className="left text-muted px-1">
                    <label htmlFor="fname" id="fname"> First Name </label>
                    <div className="pb-3">
                      <input type="text" id="fname" name="fname" placeholder="first name"/>
                    </div>

                    <label htmlFor="gender" id="gender">Gender </label>
                    <div className="pb-2 mb-2 border border-2">
                      <button type="button" class="btn btn-primary btn-sm px-4 mx-2">Female</button>
                      <button type="button" class="btn btn-sm px-4">Male</button>
                    </div>

                    <label htmlFor="country" id="country"> Country </label>
                    <div className="pb-3">
                      <input type="text" id="country" name="country" placeholder="country"/>
                    </div>

                    <label htmlFor="state" id="state">State </label>
                    <div className="pb-3">
                      <input type="text" id="state" name="state" placeholder="state"/>
                    </div>
                   
                    
                  </div>
                  <div className="right text-muted px-5">

                  <label htmlFor="lname" id="lname"> Last Name </label>
                    <div className="pb-3">
                      <input type="text" id="lname" name="lname" placeholder="last name"/>
                    </div>

                    <label htmlFor="website" id="website"> Website </label>
                    <div className="pb-3">
                      <input type="text" id="website" name="website" placeholder="tothenew.org"/>
                    </div>

                    <label htmlFor="bday" id="bday"> Birthday </label>
                    <div className="pb-3">
                      <input type="text" id="bday" name="bday" placeholder="dd/mm/yyyy"/>
                    </div>

                    <label htmlFor="pin" id="pin">Pin</label>
                    <div className="pb-3">
                      <input type="number" id="pin" name="pin" placeholder="pin"/>
                    </div>

                    

                  </div>
                  
                </div>
                <div className="mt-4">
                    <button type="button" class="btn btn-primary btn-lg mx-2 ">
                      Save
                    </button>
                    <button type="button"class="btn btn-outline-primary btn-lg">
                      Reset All                    </button>
                  </div>
              </form>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>

        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default SelfView;
