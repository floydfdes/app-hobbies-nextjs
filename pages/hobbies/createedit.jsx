import styles from "../../styles/Login.module.css";
import hobbyStyles from "../../styles/CreateHobby.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { initialPostValues, postValidationSchema } from "../../lib/models";
import { useRouter } from "next/router";
import { createPost } from "../../controllers/post";
const CreateEdit = () => {
  const router = useRouter();
  const onSubmit = async (values) => {
    const result = await createPost(values);
    if (result) {
      router.push("/hobbies");
      toast.success("Post created successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error(result.error.response.data, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div
            className={`${hobbyStyles.leftSection} col-lg-2 col-md-2 col-sm-12`}
          ></div>
          <div
            className={`${styles.loginContainer} "col-lg-10 col-md-10 col-sm-12`}
          >
            <h2>{`Create a Hobby`}</h2>
            <Formik
              initialValues={initialPostValues}
              onSubmit={onSubmit}
              validationSchema={postValidationSchema}
            >
              <Form>
                <div>
                  <Field type="text" name="title" placeholder="Title" />
                  <span className={`${hobbyStyles.error}`}>
                    <ErrorMessage name="title" />
                  </span>
                </div>
                <div>
                  <Field
                    type="text"
                    name="description"
                    placeholder="Description"
                  />
                  <span className={`${hobbyStyles.error}`}>
                    <ErrorMessage name="description" />
                  </span>
                </div>
                <div>
                  <Field type="text" name="tags" placeholder="Tags" />
                  <span className={`${hobbyStyles.error}`}>
                    <ErrorMessage name="tags" />
                  </span>
                </div>
                <div className="mt-3">
                  <button type="submit">Create</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEdit;
