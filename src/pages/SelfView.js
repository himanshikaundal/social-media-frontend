import { Field, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signup } from '../redux/actions/'
import background from "../assets/images/nav-img/background.jpg";
import himanshi from "../assets/images/nav-img/himanshi.jpeg";
import { selfView } from "../redux/actions/selfview";

function SelfView() {
  // const user = useSelector(state=>state.loginUser);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <img
              src={background}
              height="200px"
              class=" rounded-3"
              alt="no image uploaded"
            />

            <img
              src={himanshi}
              class="rounded-3 translate-middle-y w-25"
              alt="no image uploaded"
            />
          </div>

          <div className="row">
            <h2 className="translate-middle-y py-3">Himanshi Kaundal</h2>
            <div className="col-sm-6">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  gender: '',
                  state: "",
                  country: "",
                  city: "",
                  website: "",
                  bday: "",
                  headline: "",
                }}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  //actions.submitForm()
                  dispatch(selfView(values));
                  //navigate("/home");
                  console.log(values);
                  actions.setSubmitting(true);
                }}
              // validationSchema={loginSchema}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="d-flex parent ">
                      <div className="left text-muted px-1">
                        <label htmlFor="name" id="name">
                          Name
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            value={props.values.name}
                            placeholder=" name"
                          />
                        </div>

                        <label htmlFor="gender" id="gender">
                          Gender
                        </label>
                        {/* <div className="pb-2 mb-2 border border-2">
                          <button
                            type="button"
                            name="gender"
                            id="female"
                            class="btn btn-primary btn-sm px-4 mx-2"
                            //value={props.values.female}
                            onClick={props.values.female}
                          >
                            Female
                          </button>
                          <button
                            type="button"
                            name="gender"
                            id="male"
                            class="btn btn-sm px-4"
                            //value={props.values.male}
                            onClick={props.values.male}
                          >
                            Male
                          </button>
                        </div> */}

                        <div
                          class="btn-group btn-group-toggle "
                          data-toggle="buttons"
                        >
                          <label class="btn btn-secondary">
                            <Field
                              type="radio"
                              name="female"
                              id="female"
                              //autocomplete="off"
                              value='female'
                            />{" "}
                            Female
                          </label>
                          <label class="btn btn-secondary">
                            <Field
                              type="radio"
                              name="gender"
                              id="male"
                              //autocomplete="off"
                              value='male'
                            />{" "}
                            Male
                          </label>
                        </div>
                        {/* <Field name="Gender" component="select">
                          <option name="gender"value={props.values.male}>Male</option>

                          <option name="female"value={props.values.female}>Female</option>
                        </Field> */}

                        <label htmlFor="country" id="country">
                          Country
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="country"
                            name="country"
                            value={props.values.country}
                            placeholder="country"
                          />
                        </div>

                        <label htmlFor="state" id="state">
                          State
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="state"
                            name="state"
                            value={props.values.state}
                            placeholder="state"
                          />
                        </div>
                      </div>
                      <div className="right text-muted px-5">
                        <label htmlFor="email" id="email">
                          Email
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="email"
                            name="email"
                            value={props.values.email}
                            placeholder="email"
                          />
                        </div>

                        <label htmlFor="website" id="website">
                          Website
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="website"
                            name="website"
                            value={props.values.website}
                            placeholder="tothenew.org"
                          />
                        </div>

                        <label htmlFor="bday" id="bday">
                          Birthday
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="bday"
                            name="bday"
                            value={props.values.bday}
                            placeholder="dd/mm/yyyy"
                          />
                        </div>

                        <label htmlFor="pin" id="pin">
                          City
                        </label>
                        <div className="pb-3">
                          <Field
                            type="text"
                            id="city"
                            name="city"
                            value={props.values.city}
                            placeholder="city"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg mx-2 "
                      >
                        Save
                      </button>
                      <button
                        type="reset"
                        class="btn btn-outline-primary btn-lg"
                        onClick={props.resetForm}
                      >
                        Reset All
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
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
