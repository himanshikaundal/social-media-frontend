import { Field, Formik } from "formik";
import * as Yup from "yup";
import logo from "../assets/images/login/TO_THE_NEW_Logo.jpg";
import { useNavigate} from "react-router-dom";

import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { googleLogin, login } from "../redux/actions/login";
import GoogleLogin from "react-google-login";
import { getPost } from "../redux/actions/getFeeds";



const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});



const Login = () => {
  const user=useSelector(state=>state.loginUser);
  console.log(user.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function responsesuccess(response) {
    dispatch(googleLogin(response));
    dispatch(getPost());
    navigate('/home');

  }




  function responsefailure(response) {

  }



  return (
    <>
      <div className="container ">
        <div className="row vh-100 align-items-center ">
          <div className="d-flex p-5 my-5 h-75 align-items-center  border border-2 rounded-2 shadow ">
            <div className="col-sm-6 ">
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
                <GoogleLogin
                  clientId="1063994885267-fqtfvile5mkkl8vl9gkv15tvjqp45hkf.apps.googleusercontent.com"
                  render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="py-3 px-4 border border-danger border-1 text-danger rounded-pill ">
                      sign in with google
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responsesuccess}
                  onFailure={responsefailure}

                  cookiePolicy={'single_host_origin'}
                />


              </div>
            </div>

            <div className=" col-sm-6 ">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);

                  dispatch(login(values));
                  dispatch(getPost());
                  
                  actions.setSubmitting(false)
                  navigate('/home');


                }}
                validationSchema={loginSchema}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="sm-4 h3 text-center">
                      Login To Your Account
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
                    <div className="mb-4">
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
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link to='/signup'>

                          <label
                            className=""
                            htmlFor="exampleCheck1"
                          >
                            signup
                          </label>
                        </Link>
                      </div>

                      <div>
                        <Link to="/forget-password">Forgot password</Link>
                      </div>
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
                    {}
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
