import { useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from 'yup';
import logo from '../assets/images/login/TO_THE_NEW_Logo.jpg';
import { signup } from "../redux/actions/signup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { status, message } = useSelector(state => state.user);

useEffect(()=>{
if(status===200){
navigate('/');
}
},[]);

console.log(status);

  const loginSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Too Short!').required('Required'),
    username: Yup.string().min(5, 'Too Short!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
  return (
    <div className="container  sm-4   ">
      <div className="row vh-100 border border-1 rounded-2 shadow justify-content-between align-items-center ">
        <Formik
          initialValues={{
            name: '',
            username: '',
            email: '',
            password: ''
          }}
          onSubmit={(values, actions) => {
          //  actions.setSubmitting(user);
            dispatch(signup(values));
            // actions.setSubmitting(user)

          }}
          validationSchema={loginSchema}
        >

          {props => (
            <form className="offset-sm-4  col-sm-5" onSubmit={props.handleSubmit}>
              <div className="text-center">
                <img src={logo} alt="" className="w-75 " />
              </div>

              <div className='sm-4 h3 text-center'>
                Signup
              </div>

              <div className="sm-4">

                <Field type="name" name="name" value={props.values.name} className="form-control border-top-0 border-end-0 border-start-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
                {props.errors.name && props.touched.name ? (
                  <div>{props.errors.name}</div>
                ) : null}
              </div>

              <div className="sm-4">

                <Field type="name" name="username" value={props.values.username} className="form-control border-top-0 border-end-0 border-start-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Username' />
                {props.errors.username && props.touched.username ? (
                  <div>{props.errors.username}</div>
                ) : null}
              </div>

              <div className="sm-4">

                <Field type="email" name="email" value={props.values.email} className="form-control border-top-0 border-end-0 border-start-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                {props.errors.email && props.touched.email ? (
                  <div>{props.errors.email}</div>
                ) : null}
              </div>
              <div className="sm-4">

                <Field type="password" name="password" value={props.values.password} className="form-control border-top-0 border-end-0 border-start-0" id="exampleInputPassword1" placeholder='Enter Your Password' />
                {props.errors.password && props.touched.password ? (
                  <div>{props.errors.password}</div>
                ) : null}
              </div>
              <div className="sm-4 d-flex justify-content-between">
                <div>
                  <Field type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">remember me ?</label>
                </div>

              </div>
              <div className=" sm-4 text-center py-2">
                <button type="submit" className="btn-purple  text-white rounded-pill px-5 py-2 border-0"> Sign Up </button>
                {props.isSubmitting ? "Loading..." : null}
              </div>
             
            </form>

          )}
        </Formik>


      </div>

    </div>
  );
};

export default Signup;