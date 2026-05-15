import BookingCancel from "@/components/BookingCancel";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";


const BookingPage = async () => {

    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
// console.log("session",session)

const user = session?.user

console.log("user",user)

if(!user){
    return "User Null"
}

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`)
    if(!res.ok){
        return "Error"
    }
    
    const bookingData = await res.json();
    console.log("bookingData",bookingData)
    if(!bookingData){
        return "No Data"
    }
    return (
        <div>
            <h1>Booking Page</h1>

            {
                bookingData.map(booking =><div className="flex gap-3 border border-2 p-2 min-w-2xl my-2">
                    <Image src={booking.imageUrl} alt={booking.userName} width={200} height={200}></Image>
                    
                    <div>
                        <h1 className="text-2xl font-bold">{booking.destinationName}</h1>
                        <p>
                            {
                                new Date(booking.depertureDate).toLocaleDateString("en-US",{
                                    year:"numeric",
                                    month:"long",
                                    day:"numeric",
                                })
                            }
                        </p>
                        <p>Booking_id:{booking._id}</p>
                    <h1 className="text-cyan-500 text-3xl font-bold">${booking.price}</h1>
                    <BookingCancel></BookingCancel>
                    </div>
                   

                </div>)
            }
            
        </div>
    );
};

export default BookingPage;