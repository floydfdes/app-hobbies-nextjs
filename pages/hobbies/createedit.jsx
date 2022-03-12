import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialPostValues, postValidationSchema } from "../../lib/models";
import styles from "../../styles/Login.module.css";
import hobbyStyles from "../../styles/CreateHobby.module.css";
const CreateEdit = () => {
  const onSubmit = async (values) => {};
  return (
    <>
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
