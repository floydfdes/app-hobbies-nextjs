import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Login.module.css";
function SignUp() {
  hideHeader();
  function hideHeader() {
    try {
      let header = document.getElementsByClassName("header");
      console.log(header[0].classList.add("display-none"));
    } catch (error) {}
  }

  return (
    <div className="container">
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
            <h2>Create Account</h2>
            <form>
              <div className="mt-3">
                <input type="text" name="firstName" placeholder="First Name" />
              </div>
              <div className="mt-3">
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div className="mt-3">
                <input type="number" name="age" placeholder="Age" />
              </div>
              <div className="mt-3">
                <input type="gender" name="gender" placeholder="Gender" />
              </div>
              <div className="mt-3">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="mt-3">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="mt-3">
                <button>Sign Up</button>
              </div>
            </form>
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
