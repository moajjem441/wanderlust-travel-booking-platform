'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../public/assets/Wanderlast.png'
import { authClient } from "@/lib/auth-client" // import the auth client
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {

    const {
        data: session,

    } = authClient.useSession()

    console.log(session)
    const user = session?.user

    const handleSignOut = async()=>{
        await authClient.signOut();
    }

    return (
        <div>
            <nav className='flex justify-between p-4'>
                <ul className='flex justify-center gap-3'>
                    <li><Link href={'/home'}>Home</Link></li>
                    <li><Link href={'/destination'}>All Destinations</Link></li>
                    <li><Link href={'/add-destination'}>Add Destinations</Link></li>
                    <li><Link href={'/myBookings'}>My Bookings</Link></li>
                    <li><Link href={'/admin'}>Admin</Link></li>
                </ul>

                <div>
                    <Image src={img} alt='Wanderlast' width={200} height={100}></Image>
                </div>

                <ul className='flex justify-center gap-3'>
                    <li><Link href={'/profile'}></Link></li>


                    {user ?
                        <>

                            <li> <Avatar>
                                <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                                <Avatar.Fallback>{user.name}</Avatar.Fallback>
                            </Avatar></li>

                            <li>  <Link href="/login"><Button onClick={handleSignOut} variant="danger">Log out</Button></Link>
                            </li>

                        </> :
                        <>
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/signup'}>Sign Up</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;