import axios from "axios";
import Head from "next/head";
import { AiTwotoneHeart, AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import { Card } from "react-bootstrap";
import RandomImage from "../../Assets/images/hobbies_d.svg";
import { useEffect, useState } from "react";
const Hobbies = ({ data, user }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(JSON.parse(user));
  }, []);

  // console.log(data);
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
                <div key={field._id} className="col-md-3 col-sm-12 my-2">
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

                      <div className="d-flex justify-content-around">
                        <span>
                          <AiTwotoneHeart
                            fill="deeppink"
                            stroke="deeppink"
                          ></AiTwotoneHeart>{" "}
                          {field.likes.length}
                        </span>
                        {currentUser && currentUser._id === field.creator && (
                          <span>
                            <FiEdit2 fill="green" stroke="green"></FiEdit2>
                          </span>
                        )}
                        {currentUser && currentUser._id === field.creator && (
                          <span>
                            <AiTwotoneDelete
                              fill="darkred"
                              stroke="darkred"
                            ></AiTwotoneDelete>
                          </span>
                        )}
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
