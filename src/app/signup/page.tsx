import LoginPage from "@/components/Login/Login";
import SignupPage from "@/components/Signup/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electron | Signup",
};

const Signup = () => {
  return (
    <>
      <SignupPage />
    </>
  );
};

export default Signup;
