
import DeleteAlert from "@/components/DeleteAlert";
import EditDestinationCard from "@/components/EditDestinaitonCard";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id)

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destinationDetails = await res.json()

  const { destinationName, country, category, price, duration, departureDate, imageUrl, description } = destinationDetails;
  console.log(destinationDetails)
  return (
    <div>
      <div className="max-w-2/3 mx-auto">
       <div className="flex justify-between items-center">
         <Link href={'/destination'}><Button className="m-2">Back </Button></Link>
         
         <EditDestinationCard destinationDetails={destinationDetails}></EditDestinationCard>
          <DeleteAlert destinationDetails={destinationDetails}></DeleteAlert>
       </div>

        <Image src={imageUrl} alt="destinationImage" width={900} height={500} className="w-full"></Image>

        <div className="flex justify-between items-center gap-2">
          <Card className="gap-2">

            <Card.Header>
              <Card.Title>Bali Island</Card.Title>
              <h1><span className="font-bold">Overview</span> <br></br>{description}</h1>
              <h1 className="font-bold">Category:{category}</h1>
              <h1><span className="font-bold">Highlights</span> <br></br> {description}</h1>
            </Card.Header>
            <Card.Footer className="flex gap-2">
              <Avatar aria-label="John's profile picture" className="size-5">
                <Avatar.Image
                  alt="John's avatar - blue themed"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                />
                <Avatar.Fallback className="text-xs">B</Avatar.Fallback>
              </Avatar>
              <span className="text-xs">By John</span>
            </Card.Footer>
          </Card>





          <Card className="gap-2 max-w-3xl p-4">
            <h2>Starting from</h2>
            <h1 className="text-cyan-500">${price} per person</h1>

            <div className="my-3 bg-gray-300 p-2 rounded-3xl">
              <h2>{departureDate}</h2>
            </div>

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
      </div>
    </div>
  );
};

export default DestinationDetailsPage;