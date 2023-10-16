import * as yup from "yup";

export const loginSchema = yup.object().shape({
  password: yup.string().required("password is required"),
  id: yup.string().required("Email/Id is required"),
});

export const signupSchema = yup.object().shape({
  password: yup.string().min(6).required("Password is require"),
  generalUser: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      middleName: yup.string().required("Middle name is required"),
    }),
    email: yup.string().email().required("Email is required"),
    gender: yup.string().required("Gender is required"),
  }),
});
