"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, FieldError, Label } from "@heroui/react";
import { Button, Card } from "@heroui/react";
import {  useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";



const BookingCard =  ({ destinationDetails }) => {

    const {_id,destinationName, country, category, price, duration, departureDate, imageUrl, description } = destinationDetails;
 
    const [selectData,setSelectData]= useState(null)

    const {
        data: session
    }=authClient.useSession();

    const user = session?.user;
    console.log(user)

    const handleBoooking = async()=>{
       const bookingData={
         userId:user.id,
        userName:user.name,
        destinationId:_id,
        destinationName,
        country,
        category,
        price,
        duration,
        imageUrl,
        depertureDate : new Date(selectData)
       }

       console.log(bookingData)


       const req = await fetch('http://localhost:5000/bookings',{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(bookingData)
       })
       const data = await req.json();
          console.log(data)

          toast.success("Booked Confirm Successfully!")
          
    }

    return (
        <div>
            <Card className=" max-w-7xl p-4 ">
                <h2>Starting from</h2>
                <h1 className="text-cyan-500 font-bold text-3xl">${price}</h1>
                <p> per person</p>

                {/* <div className="my-3 bg-gray-300 p-2 rounded-3xl">
                    <h2>{departureDate}</h2>
                </div> */}

                <DateField onChange={setSelectData} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>


                <Button onClick={handleBoooking} className="w-full">Book Now <FaArrowRight /> </Button>



                <ul className="space-y-2">
                    <li>
                        <div className="flex items-center">
                            <span><TiTick style={{ color: "green" }} /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum.
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <span><TiTick style={{ color: "green" }} /></span> Lorem ipsum dolor sit amet.
                        </div>
                    </li>
                    <li >
                        <div className="flex items-center">
                            <span><TiTick style={{ color: "green" }} /></span> Lorem ipsum dolor sit amet.
                        </div>
                    </li>
                </ul>




            </Card>
        </div>
    );
};

export default BookingCard;