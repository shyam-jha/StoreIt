import React from "react";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Siderbar";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavbar";
import { Account } from "node-appwrite";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {

    const currentUser = await getCurrentUser();
    if (!currentUser) return redirect("/sign-in");


    return (
        <main className="flex h-screen max-w-[2000px] mx-auto border border-black">
            <Sidebar {...currentUser} />

            <section className="flex h-full flex-1 flex-col">
                <MobileNavigation {...currentUser} />
                <Header userId={currentUser.$id} accountId={currentUser.accountId} />
                <div className="main-content">{children}</div>
            </section>

            <Toaster />
        </main>
    );
};
export default Layout;