import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";

export function DialogDemo() {


    return (
        <Dialog >
            <DialogTrigger className="body-2 text-brand">See Terms and Conditions</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Terms and Conditions</DialogTitle>
                    <Separator />
                </DialogHeader>
                <div className="h-96 overflow-y-auto text-sm text-muted-foreground">
                    <h2 className="font-bold text-base mb-4 text-brand">Welcome to StoreIt</h2>
                    <p>
                        StoreIt is a cloud storage platform developed as a hobby project. The platform allows users to upload and store files securely. However, please note that the developer of this project will have access to all files and user data uploaded to the platform.
                    </p>

                    <h2 className="font-bold text-base mt-6 mb-4 text-brand">Privacy and Security</h2>
                    <p>
                        We take your privacy and data security seriously. However, since this is a hobby project, the platform may not adhere to industry-level security protocols. Users are advised to avoid uploading sensitive or confidential information.
                    </p>

                    <h2 className="font-bold text-base mt-6 mb-4 text-brand">Data Access</h2>
                    <p>
                        By using StoreIt, you agree that the developer of this project has access to all files and data uploaded to the platform. This includes, but is not limited to, file names, content, metadata, and user details. The developer may use this data for debugging, maintenance, or improvement purposes.
                    </p>

                    <h2 className="font-bold text-base mt-6 mb-4 text-brand">User Responsibility</h2>
                    <p>
                        Users are responsible for ensuring that the files they upload comply with applicable laws and regulations. The platform should not be used to store or distribute any illegal or copyrighted content without proper authorization.
                    </p>

                    <h2 className="font-bold text-base mt-6 mb-4 text-brand">Liability</h2>
                    <p>
                        The developer of StoreIt is not responsible for any data loss, unauthorized access, or misuse of the platform. Users acknowledge that this is a hobby project and use it at their own risk.
                    </p>

                    <h2 className="font-bold text-base text-brand mt-6 mb-4">Termination</h2>
                    <p>
                        The developer reserves the right to terminate user accounts or delete uploaded files at any time without prior notice. Users are encouraged to keep backups of their files.
                    </p>

                    <h2 className="font-bold text-base text-brand mt-6 mb-4">Contact</h2>
                    <p>
                        If you have any questions or concerns about these terms and conditions, please contact the developer at <a href="mailto:shyamjhaedu@gmail.com" className="underline">shyamjhaedu@gmail.com</a>.
                    </p>
                </div>
                <DialogClose>
                    <span className="mt-4">Close</span>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
