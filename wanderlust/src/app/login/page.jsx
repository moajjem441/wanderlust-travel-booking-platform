"use client";
import { Button, Card, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation"; // Use useRouter instead of redirect for event handlers
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const LogInPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (data) {
            router.push('/'); // router.push is better inside functions than redirect()
        }
        if (error) {
            alert("Login failed. Please check your credentials.");
        }
    }; // Closed onSubmit properly

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="py-10">
            <h1 className="text-center text-3xl font-bold">Log in Account</h1>
            <p className="text-center text-gray-500 mb-6">Start your adventure with Wanderlust</p>
            
            <Card className="w-full max-w-xl mx-auto">
                <Form onSubmit={onSubmit}>
                    <Card.Content className="pt-6">
                        <div className="flex flex-col gap-4">
                            <TextField name="email" type="email">
                                <Label>Email</Label>
                                <div className="relative w-full">
                                    <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
                                    <Input className="w-full pl-10" placeholder="email@example.com" variant="secondary" />
                                </div>
                            </TextField>

                            <TextField name="password" type="password">
                                <Label>Password</Label>
                                <div className="relative w-full">
                                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
                                    <Input className="w-full pl-10" placeholder="••••••••" variant="secondary" />
                                </div>
                            </TextField>
                        </div>
                    </Card.Content>
                    
                    <Card.Footer className="flex flex-col gap-2 py-4">
                        <Button className="w-full" type="submit" color="primary">
                            Log in
                        </Button>

                        <div className="flex items-center gap-4 w-full my-3">
                            <div className="h-[1px] w-full bg-gray-200"></div>
                            <p className="whitespace-nowrap text-sm text-gray-400">Or Sign in with</p>
                            <div className="h-[1px] w-full bg-gray-200"></div>
                        </div>

                        <Button 
                            className="w-full" 
                            variant="bordered" 
                            onClick={handleGoogleSignIn}
                            
                        ><FcGoogle/>
                            Sign in with Google
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default LogInPage;