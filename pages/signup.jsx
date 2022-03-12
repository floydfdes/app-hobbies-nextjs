import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialSignUpValues, signUpValidationSchema } from "../lib/models";
import { signUp } from "../controllers/auth";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  hideHeader();
  function hideHeader() {
    try {
      let header = document.getElementsByClassName("header");
      console.log(header[0].classList.add("display-none"));
    } catch (error) {}
  }
  const onSubmit = async (values) => {
    const result = await signUp(values);
    if (result && result.token) {
      document.cookie = `user=${JSON.stringify(result.result)}`;
      localStorage.setItem("token", result.token);
      localStorage.setItem("profile", JSON.stringify(result.result));
      router.push("/");
      toast.success("sign in successfull", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      console.log(result.error.response.data);
      toast.error(result.error.response.data, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div className="container login-main-container">
      <Head>
        <title>Hobbies - Signup</title>
      </Head>
      <ToastContainer />
      <div className={`container ${styles.containerHeight}`}>
        <div className="row">
          <div
            className={`${styles.loginContainerImage} col-lg-6 col-md-6 d-none d-md-block d-lg-block`}
          ></div>
          <div
            className={`${styles.loginContainer} col-lg-6 col-md-6 col-sm-12`}
          >
            <h2>Welocome !</h2>
            <div>Create account to explore</div>
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
                  <span className={`${styles.validationError}`}>
                    <ErrorMessage name="firstName" />
                  </span>
                </div>
                <div>
                  <Field type="text" name="lastName" placeholder="Last Name" />
                  <span className={`${styles.validationError}`}>
                    <ErrorMessage name="lastName" />
                  </span>
                </div>
                <div>
                  <Field type="number" name="age" placeholder="Age" />
                  <span className={`${styles.validationError}`}>
                    <ErrorMessage name="age" />
                  </span>
                </div>
                <div>
                  <Field
                    as="select"
                    type="gender"
                    name="gender"
                    placeholder="Gender"
                  >
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                  <span className={`${styles.validationError}`}>
                    <ErrorMessage name="gender" />
                  </span>
                </div>
                <div>
                  <Field type="email" name="email" placeholder="Email" />
                  <span className={`${styles.validationError}`}>
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <span className={`${styles.validationError}`}>
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
                <Link href="/login"> Login</Link>
              </strong>
            </div>
            <div>
              <Link href="/">Back to hobbies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
