import { Field, Formik } from "formik";
import * as Yup from 'yup';

import api from "../api";

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


const Login = () => {
    return (
        <>
            <div>Login</div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values, actions) => {
                    console.log(values)
                    actions.setSubmitting(false);
                }}
                validationSchema={loginSchema}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <Field
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        {props.errors.email && props.touched.email ? (
                            <div>{props.errors.email}</div>
                        ) : null}
                        <br />
                        <label htmlFor="password">Password</label>
                        <Field className="form-control" id="password" name="password" type="password" placeholder="Password" />
                        {props.errors.password && props.touched.password ? (
                            <div>{props.errors.password}</div>
                        ) : null}
                        <button type="submit" className="btn btn-primary">Login</button>
                        {props.isSubmitting ? "Loading..." : null}
                    </form>)}
            </Formik>
        </>
    );
};

export default Login;