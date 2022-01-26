import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import singing from "../Assets/images/hobbies_e.svg";
import styles from "../styles/Login.module.css";
import { useEffect } from "react";
function Login() {
  let screenWidth = 0;
  useEffect(() => {
    let header = document.getElementsByClassName("header");
    console.log(header[0].classList.add("display-none"));
    screenWidth = window.innerWidth;
    window.addEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function onResize() {
    screenWidth = window.innerWidth;
    console.log(screenWidth);
  }

  return (
    <div className="container">
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
            {screenWidth < 720 && <Image src={singing} />}
            <h2>Login</h2>
            <form>
              <div className="mt-3">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="mt-3">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="mt-3">
                <button>Login</button>
              </div>
            </form>
            <div className="mt-3 message">
              Dont have an account?
              <strong>
                <Link href="/signup">Signup</Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
