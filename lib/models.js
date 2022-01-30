import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};
export const initialSignUpValues = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  email: "",
  password: "",
};
export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});
export const signUpValidationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});
