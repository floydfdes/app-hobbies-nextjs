import Navbar from "../components/Navbar";
import Head from "next/head";
const index = () => {
  return (
    <div className="container">
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
      Index page
    </div>
  );
};

export default index;
