import styles from "../styles/Section.module.css";
import cardImage from "../Assets/images/Idea.svg";
import bulb from "../Assets/images/Login.svg";
import like from "../Assets/images/Edit.svg";
import Image from "next/image";
const Section = () => {
  return (
    <div className={`container-fluid ${styles.cardSection}`}>
      <div className="text-center">
        <h1>Our services</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          fugiat ex corporis ab laborum odit tempora distinctio doloribus.
        </p>
      </div>
      <div className={`d-flex ${styles.cardContainer}`}>
        <div className={`card ${styles.sectionCards} m-4 p-3 shadow`}>
          <Image src={bulb} alt="" />
          <h3>Lorem ipsum</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            porro neque voluptatibus fuga!
          </span>
        </div>
        <div className={`card ${styles.sectionCards} m-4 p-3 shadow`}>
          <Image src={cardImage} alt="" />
          <h3>Lorem ipsum</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            porro neque voluptatibus fuga!
          </span>
        </div>
        <div className={`card ${styles.sectionCards} m-4 p-3 shadow`}>
          <Image height={200} src={like} alt="" />
          <h3>Lorem ipsum</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            porro neque voluptatibus fuga!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section;
