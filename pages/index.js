import Head from "next/head";
import Section from "../components/Section";
import styles from "../styles/index.module.css";
const index = () => {
  return (
    <>
      <div className={`container ${styles.home} ${styles.flexContainer}`}>
        <Head>
          <title>Postpred</title>
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
          <h1>Lorem ipsum dolor sit amet consectetur. </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nobis illum excepturi sint, omnis atque maxime tempora quaerat
            nostrum placeat
          </p>
        </div>
        <div className={`${styles.flexItemRight} d-none d-md-block d-lg-block`}>
          <div className={`${styles.flexItemRightContent}`}></div>
        </div>
      </div>
      <Section />
    </>
  );
};

export default index;
