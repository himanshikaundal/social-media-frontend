import React from 'react'
import { useDispatch } from 'react-redux';
import { Field, Formik } from "formik";
import * as Yup from "yup";
function ChangePassword() {

const loginSchema = Yup.object().shape({
    old_Password: Yup.string().min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    new_Password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
      confirm_Password: Yup.string()
      .oneOf([Yup.ref('new_Password'), null], 'Passwords must match')
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const dispatch= useDispatch()
    return (

        <div className='container'>
            <Formik
                initialValues={{
                    old_Password: "",
                    new_Password: "",
                    confirm_Password:""
                }}
                onSubmit={(values, actions) => {
                   
                    // dispatch(changepassword(values))
                    actions.setSubmitting(true);

                }}
                validationSchema={loginSchema}
            >
                {(props) => (
                    <div className='row vh-100 d-flex justify-content-center align-items-center'> 
                        
                        <form onSubmit={props.handleSubmit}>
                        <div className="sm-4 h3 text-center">
                          Change your Password
                        </div>

                        <div className="sm-4">
                            <Field
                                type="password"
                                name="old_Password"
                                value={props.values.old_Password}
                                className="form-control border-top-0 border-end-0 border-start-0"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="enter old password"
                            />
                            {props.errors.old_Password && props.touched.old_Password ? (
                                <div>{props.errors.old_Password}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <Field
                                type="password"
                                name="new_Password"
                                value={props.values.new_Password}
                                className="form-control border-top-0 border-end-0 border-start-0"
                                id="exampleInputPassword1"
                                placeholder="enter new password"
                            />
                            {props.errors.new_Password && props.touched.new_Password ? (
                                <div>{props.errors.new_Password}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <Field
                                type="password"
                                name="confirm_Password"
                                value={props.values.confirm_Password}
                                className="form-control border-top-0 border-end-0 border-start-0"
                                id="exampleInputPassword1"
                                placeholder="re-enter your  password"
                            />
                            {props.errors.confirm_Password && props.touched.confirm_Password ? (
                                <div>{props.errors.confirm_Password}</div>
                            ) : null}
                        </div>
                        
                        <div className="sm-4 text-center py-2">
                            <button
                                type="submit"
                                className="btn-purple  text-white rounded-pill px-5 py-2 border-0"
                            >
                                {" "}
                                Submit {props.isSubmitting ? "Loading..." : null}
                            </button>
                        </div>
                    </form>
                        
                         </div>
                   
                )}
            </Formik>

        </div>
    )
}

export default ChangePassword