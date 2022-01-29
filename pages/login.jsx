import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import singing from "../Assets/images/hobbies_e.svg";
import styles from "../styles/Login.module.css";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema, initialValues } from "../Utilities/service";

function Login() {
  let screenWidth = 0;
  const onSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    let header = document.getElementsByClassName("header");
    console.log(header[0].classList.add("display-none"));
    screenWidth = window.innerWidth;
    window.addEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onResize() {
    screenWidth = window.innerWidth;
  }

  return (
    <div className="container login-main-container">
      <Head>
        <title>Hobbies - Login</title>
      </Head>
      <div className={`container ${styles.containerHeight}`}>
        <div className="row">
          <div
            className={`${styles.loginContainerImage} col-lg-6 col-md-6 d-none d-md-block d-lg-block`}
          ></div>
          <div
            className={`${styles.loginContainer} col-lg-6 col-md-6 col-sm-12`}
          >
            {screenWidth < 768 && <Image src={singing} />}
            <div>Sign in to continue</div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={loginValidationSchema}
            >
              <Form>
                <div className="mt-3">
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
                <div className="mt-3">
                  <button type="submit">Login</button>
                </div>
              </Form>
            </Formik>
            <div className="mt-3 message">
              Dont have an account?
              <strong>
                <Link href="/signup">Sign Up</Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
