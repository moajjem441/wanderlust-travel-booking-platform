"use client";
import { Button, Card, Form, Input, Label, Link, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { createAuthClient } from "better-auth/client";
import { redirect } from "next/navigation";


const LogInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())
        console.log(user)
     

        const {data,error} = await authClient.signIn.email({
            email: user.email,
            password:user.password,
            
           
        })
        console.log({data,error})

        if(data){
            redirect('/')
        }
        if(error){
            alert("error")
        }
    }
    return (
        <div>
            <h1 className="text-center text-3xl">Log in Account</h1>
            <p className="text-center text-gray-500">Start your adventure with Wanderlust</p>
            <Card className="w-full max-w-xl mx-auto">

                <Card.Header>

                </Card.Header>
                <Form onSubmit={onSubmit}>
                    <Card.Content>
                        <div className="flex flex-col gap-4">


                            <TextField name="email" type="email">
                                <Label>Email</Label>

                              <div className="relative w-full">
                                 <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <Input className="w-full pl-10" placeholder="email@example.com" variant="secondary" />
                              </div>

                            </TextField>

                            <TextField name="password" type="password">
                                <Label>Password</Label>
                                
                                <div className="relative w-full">
                                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <Input className="w-full pl-10" placeholder="••••••••" variant="secondary" />
                                </div>

                            </TextField>



                        </div>
                    </Card.Content>
                    <Card.Footer className="mt-4 flex flex-col gap-2">
                        <Button className="w-full" type="submit">
                           Log in
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default LogInPage;