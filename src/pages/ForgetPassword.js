import { Field, Formik } from "formik";
import * as Yup from "yup";
import logo from "../assets/images/login/TO_THE_NEW_Logo.jpg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/login";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),

});

const ForgetPassword = () => {
  return (
    <>

      <div className="container p-5 my-5 h-75 border border-2 rounded-2 shadow  ">
        <div className=" ">
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values, actions) => {
              //dispatch(login(values));
              console.log(values);
              actions.setSubmitting(true);
            }}
            validationSchema={loginSchema}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className="sm-4 h3 py-2 text-center">
                  Forget Password
                </div>

                <div className="sm-4">
                  <Field
                    type="email"
                    name="email"
                    value={props.values.email}
                    className="form-control border-top-0 border-end-0 border-start-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="TTN Username"
                  />
                  {props.errors.email && props.touched.email ? (
                    <div>{props.errors.email}</div>
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
    </>
  );
};

export default ForgetPassword;
