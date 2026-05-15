"use client";
import {AlertDialog, Button} from "@heroui/react";
import { BiTrash } from "react-icons/bi";

const BookingCancel = ({bookingId}) => {
    // console.log(bookingId)

    const handleBookingCancel=async()=>{

        const res = await fetch(`http://localhost:5000/bookings/${bookingId}`,{
            method:"DELETE",
            headers:{
                'content-type':"application/json"
            }
        })
        const data = res.json();
        console.log("Data",data)
    }

    return (
        <div>
            <AlertDialog>
      <Button variant="danger" ><BiTrash/>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleBookingCancel} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default BookingCancel;