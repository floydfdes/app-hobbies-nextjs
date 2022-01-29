import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};
export const initialSignUpValues = {
  firstName: "",
  lastName: "",
  age: 0,
  gender: "",
  email: "",
  password: "",
};
export const loginValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});
export const signUpValidationSchema = Yup.object({
  firstName: Yup.string().min(2).required(),
  lastName: Yup.string().min(2).required(),
  age: Yup.number().required().positive().integer(),
  gender: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});
