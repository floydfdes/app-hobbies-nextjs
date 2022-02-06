import axios from "axios";
import Head from "next/head";
import { Card, Avatar } from "antd";
import { EditOutlined, DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import RandomImage from "../../Assets/images/hobbies_d.svg";
const Hobbies = ({ data }) => {
  console.log(data);

  const { Meta } = Card;
  return (
    <div className="container">
      <Head>
        <title>Hobbies - Hobbies</title>
      </Head>

      <img src="../../" alt="" />
      <div className="row">
        {data.map((field) => {
          return (
            <div key={field._id} className="col-md-4 col-sm-12">
              <Card
                size={"small"}
                cover={<Image height={200} alt="example" src={RandomImage} />}
                actions={[
                  <HeartOutlined key="heart" />,
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={field.title}
                  description={field.description}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://hobbies-project.herokuapp.com/posts"
  );

  return { props: { data } };
}

export default Hobbies;
