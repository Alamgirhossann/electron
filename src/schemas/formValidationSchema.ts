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

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is require"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const feedbackFormSchema = yup.object().shape({
  name: yup.string().required("Name is require"),
  email: yup.string().email().required("Email is required"),
  rating: yup.string().required("Rating is required"),
  message: yup.string().required("Message is required"),
});
