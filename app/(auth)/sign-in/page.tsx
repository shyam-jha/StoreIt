import AuthForm from "@/components/Authform";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign-In",
};

const LoginPage = () => <AuthForm type="sign-in" />

export default LoginPage;