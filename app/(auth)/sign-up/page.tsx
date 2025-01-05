import AuthForm from "@/components/Authform";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign-Up",
};

const SignUpPage = () => <AuthForm type="sign-up" />

export default SignUpPage;