import Head from "next/head";
import { useState, useEffect } from "react";
import About from "../components/About";
import Section from "../components/Section";
import styles from "../styles/index.module.css";
const Index = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if(props.user)setCurrentUser(JSON.parse(props.user));
  }, []);
  hideHeader();
  function hideHeader() {
    try {
      let header = document.getElementsByClassName("header");
      console.log(header[0].classList.remove("display-none"));
    } catch (error) {}
  }
  return (
    <>
      <div className={`container ${styles.home} ${styles.flexContainer}`}>
        <Head>
          <title>Hobbies</title>
          <meta
            name="description"
            content="This is the postpred website where you can create, edit, like and delete a post. It also has a heart disease prediction and image classification"
          />
          <meta
            name="keywords"
            content="Home page, Pospred, post, prediction, classification"
          />
        </Head>

        <div className={`${styles.flexItemLeft}`}>
          <h1>{`Hello ${
            currentUser ? currentUser.firstName : "Guest"
          }, Welcome to Hobbies`}</h1>
          <p className="gray-paras">
            Create and share your hobbies to the whole world. Its simple and
            completely free.
          </p>
          <p>
            <button className="btn">Explore</button>
          </p>
        </div>
        <div className={`${styles.flexItemRight} d-none d-md-block d-lg-block`}>
          <div className={`${styles.flexItemRightContent}`}></div>
        </div>
      </div>
      <Section />
      <About />
    </>
  );
};

export default Index;
