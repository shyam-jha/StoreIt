"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { createAccount, signInUser } from "@/lib/actions/user.actions";
import OTPModal from "./OTPModal";
import { DialogDemo } from "./Terms&Condition";


type FormType = "sign-in" | "sign-up";

const authFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().email(),
        fullName:
            formType === "sign-up"
                ? z.string().min(2).max(50)
                : z.string(),
    });
};


const AuthForm = ({ type }: { type: FormType }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [accountId, setAccountId] = useState(null);
    const [isTermsChecked, setIsTermsChecked] = useState(true);

    const formSchema = authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setErrorMessage("");
        try {
            const user =
                type === "sign-up"
                    ? await createAccount({
                        fullName: values.fullName,
                        email: values.email,
                    })
                    : await signInUser({ email: values.email });

            if (user.error) {
                setErrorMessage(user.error);
                return;
            }

            setAccountId(user.accountId);
        }
        catch {
            setErrorMessage("Failed to create account. Please try again later after sometime.")
        }
        finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                    <h1 className="form-title">
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                    </h1>
                    {type === "sign-up" && (
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="shad-form-item">
                                        <FormLabel className="shad-form-label">Full Name</FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Enter your full name"
                                                className="shad-input"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>

                                    <FormMessage className="shad-form-message" />
                                </FormItem>
                            )}
                        />
                    )}

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="shad-form-item">
                                    <FormLabel className="shad-form-label">Email</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            className="shad-input"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage className="shad-form-message" />
                            </FormItem>
                        )}
                    />

                    {type === "sign-up" &&
                        <div className="mt-4 ml-2 flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={isTermsChecked}
                                onChange={(e) => setIsTermsChecked(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to the Terms and Conditions.
                            </label>
                        </div>
                    }



                    <Button
                        type="submit"
                        className="form-submit-button"
                        disabled={isLoading || !isTermsChecked}
                    >
                        {type === "sign-in" ? "Sign In" : "Sign Up"}

                        {isLoading && (
                            <Image
                                src="/assets/icons/loader.svg"
                                alt="loader"
                                width={24}
                                height={24}
                                className="ml-2 animate-spin"
                            />
                        )}
                    </Button>


                    {errorMessage && <p className="error-message">*{errorMessage}</p>}

                    <div className="body-2 flex justify-center">
                        <p className="text-light-100">
                            {type === "sign-in"
                                ? "Don't have an account?"
                                : "Already have an account?"}
                        </p>
                        <Link
                            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className="ml-1 font-medium text-brand"
                        >
                            {" "}
                            {type === "sign-in" ? "Sign Up" : "Sign In"}
                        </Link>
                    </div>

                    <DialogDemo />

                </form>
            </Form>

            {accountId && (
                <OTPModal email={form.getValues("email")} accountId={accountId} />
            )}


        </>
    )

};

export default AuthForm;