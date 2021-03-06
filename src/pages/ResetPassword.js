import { Field, Formik } from "formik";
import * as Yup from "yup";
import logo from "../assets/images/login/TO_THE_NEW_Logo.jpg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/users";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ResetPassword = () => {
  return (
    <>
      <div className="container ">
        {/* <div className="row  align-items-center "> */}
        <div className="d-flex p-5 my-5 h-75 align-items-center  border border-2 rounded-2 shadow ">
          {/* <div className="col-sm-6 "> */}
          <div className="text-center">
            <img src={logo} alt="" className="w-25" />
          </div>
          <div className="p-3 text-center">
            Enter your details and start your journey with us
          </div>
          <div className="fw-lighter text-center">
            Don't stop until you're proud
          </div>
          <div className="p-3 text-center">
            <button className="py-3 px-4 border border-danger border-1 text-danger rounded-pill ">
              sign in with google
            </button>
          </div>
        </div>

        <div className=" col-sm-6 ">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              dispatch(login(values));
              console.log(values);
              actions.setSubmitting(true);
            }}
            validationSchema={loginSchema}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className="sm-4 h3 text-center">RESET YOUR PASSWORD</div>

                <div className="sm-4">
                  <h4>your email id is :</h4>
                  {props.values.email}
                </div>
                <div className="mb-4">
                  <div className="fw-lighter text-center">
                    Enter your new Password:
                  </div>
                  <Field
                    type="password"
                    name="password"
                    value={props.values.password}
                    className="form-control border-top-0 border-end-0 border-start-0"
                    id="exampleInputPassword1"
                    placeholder="password"
                  />
                  {props.errors.password && props.touched.password ? (
                    <div>{props.errors.password}</div>
                  ) : null}
                </div>

                <div className="mb-4">
                  <div className="fw-lighter text-center">
                    Re-Enter your new Password:
                  </div>
                  <Field
                    type="password"
                    name="password"
                    value={props.values.password}
                    className="form-control border-top-0 border-end-0 border-start-0"
                    id="exampleInputPassword1"
                    placeholder="password"
                  />
                  {props.errors.password && props.touched.password ? (
                    <div>{props.errors.password}</div>
                  ) : null}
                </div>

                <div className="sm-4 text-center py-2">
                  <button
                    type="submit"
                    className="btn-purple  text-white rounded-pill px-5 py-2 border-0"
                  >
                    {" "}
                    Sign In {props.isSubmitting ? "Loading..." : null}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {/* </> </div>
      </div> */}
    </>
  );
};

export default ResetPassword;
