import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialSignUpValues, signUpValidationSchema } from "../lib/models";
import { signUp } from "../controllers/auth";

function SignUp() {
  hideHeader();
  function hideHeader() {
    try {
      let header = document.getElementsByClassName("header");
      console.log(header[0].classList.add("display-none"));
    } catch (error) {}
  }
  const onSubmit = (values) => {
    const result = await signUp(values);
    console.log(result);
  };

  return (
    <div className="container login-main-container">
      <Head>
        <title>Hobbies - Signup</title>
      </Head>
      <div className={`container ${styles.containerHeight}`}>
        <div className="row">
          <div
            className={`${styles.loginContainerImage} col-lg-6 col-md-6 d-none d-md-block d-lg-block`}
          ></div>
          <div
            className={`${styles.loginContainer} col-lg-6 col-md-6 col-sm-12`}
          >
            <h2>Welocome !</h2>
            <div>create Account to explore</div>
            <Formik
              initialValues={initialSignUpValues}
              onSubmit={onSubmit}
              validationSchema={signUpValidationSchema}
            >
              <Form>
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <span className="validation-span">
                    <ErrorMessage name="firstName" />
                  </span>
                </div>
                <div>
                  <Field type="text" name="lastName" placeholder="Last Name" />
                  <span className="validation-span">
                    <ErrorMessage name="lastName" />
                  </span>
                </div>
                <div>
                  <Field type="number" name="age" placeholder="Age" />
                  <span className="validation-span">
                    <ErrorMessage name="age" />
                  </span>
                </div>
                <div>
                  <Field type="gender" name="gender" placeholder="Gender" />
                  <span className="validation-span">
                    <ErrorMessage name="gender" />
                  </span>
                </div>
                <div>
                  <Field type="email" name="email" placeholder="Email" />
                  <span className="validation-span">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <span className="validation-span">
                    <ErrorMessage name="password" />
                  </span>
                </div>
                <div>
                  <button type="submit">Sign Up</button>
                </div>
              </Form>
            </Formik>
            <div className="mt-3 message">
              Already have an account?
              <strong>
                <Link href="/login">Login</Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
