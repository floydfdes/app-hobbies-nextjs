import styles from "../styles/Section.module.css";
import cardImage from "../Assets/images/Idea.svg";
import bulb from "../Assets/images/Login.svg";
import like from "../Assets/images/Edit.svg";
import Image from "next/image";
import Head from "next/head";
const Section = () => {
  <Head>
    <title>Hobbies-section</title>
  </Head>;
  return (
    <div className={`container-fluid ${styles.cardSection}`}>
      <div className="text-center">
        <h1>Our services</h1>
      </div>
      <div className={`d-flex ${styles.dFlex} ${styles.cardContainer}`}>
        <div className={`card ${styles.sectionCards} m-4 p-3 shadow`}>
          <Image src={bulb} alt="" />
          <h3>Create a hobby</h3>
          <span className="gray-paras">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic est
            sunt aliquam error quibusdam distinctio vero possimus aperiam eum
            maiores voluptatibus temporibus dolores fuga incidunt, voluptatum
            assumenda amet odit quia?
          </span>
        </div>
        <div className={`card ${styles.sectionCards} m-4 p-3 shadow`}>
          <Image src={cardImage} alt="" />
          <h3>Edit a hobby</h3>
          <span className="gray-paras">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic est
            sunt aliquam error quibusdam distinctio vero possimus aperiam eum
            maiores voluptatibus temporibus dolores fuga incidunt, voluptatum
            assumenda amet odit quia?
          </span>
        </div>
        <div className={`card ${styles.sectionCards} m-4 p-3 shadow`}>
          <Image height={200} src={like} alt="" />
          <h3>Like a hobby</h3>
          <span className="gray-paras">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic est
            sunt aliquam error quibusdam distinctio vero possimus aperiam eum
            maiores voluptatibus temporibus dolores fuga incidunt, voluptatum
            assumenda amet odit quia?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section;
