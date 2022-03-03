import axios from "axios";
import Head from "next/head";
import { AiTwotoneHeart, AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import { Card } from "react-bootstrap";
import RandomImage from "../../Assets/images/hobbies_d.svg";
const Hobbies = ({ data }) => {
  return (
    <div className="container">
      <Head>
        <title>Hobbies - Hobbies</title>
      </Head>

      <div className="container hobbies-container">
        <div className="row">
          {data &&
            data.map((field) => {
              return (
                <div key={field._id} className="col-md-4 col-sm-12 my-2">
                  <Card className="shadow-lg p-2">
                    <Image
                      className="card-image"
                      height={200}
                      width={200}
                      loading="lazy"
                      variant="top"
                      src={`https://source.unsplash.com/random/300x200?sig=${
                        field._id + Math.random()
                      }`}
                    />
                    <Card.Body>
                      <Card.Title>{field.title}</Card.Title>
                      <Card.Text>{field.description}</Card.Text>

                      <div className="d-flex justify-content-between">
                        <span variant="primary">
                          <AiTwotoneHeart></AiTwotoneHeart> {field.likes.length}
                        </span>
                        <span variant="primary">
                          <FiEdit2></FiEdit2>
                        </span>
                        <span variant="primary">
                          <AiTwotoneDelete></AiTwotoneDelete>
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      "https://hobbies-project.herokuapp.com/posts"
    );
    return { props: { data } };
  } catch (err) {
    console.log(err);
  }
  return { props: { data: null } };
}

export default Hobbies;
