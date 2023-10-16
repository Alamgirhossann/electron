import LoginPage from "@/components/Login/Login";
import SignupPage from "@/components/Signup/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "P-ELECTRICIAN | Signup",
};

const Signup = () => {
  return (
    <>
      <SignupPage />
    </>
  );
};

export default Signup;
