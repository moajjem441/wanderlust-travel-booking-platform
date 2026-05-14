"use client";
import {DateField, Label} from "@heroui/react";
import { Button, Card } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";


const BookingCard = ({destinationDetails}) => {

      const { country, category, price, duration, departureDate, imageUrl, description } = destinationDetails;


    return (
        <div>
            <Card className=" max-w-7xl p-4">
            <h2>Starting from</h2>
            <h1 className="text-cyan-500 font-bold text-3xl">${price}</h1>
            <p> per person</p>

            <div className="my-3 bg-gray-300 p-2 rounded-3xl">
              <h2>{departureDate}</h2>
            </div>
            <DateField className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>

            <Button className="w-full">Book Now <FaArrowRight /> </Button>



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