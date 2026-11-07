import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoEnterOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';

const DestinationCard = ({ destination }) => {
    if(!destination){
        return "No data"
    }
    const { _id,destinationName, country, price, duration, imageUrl } = destination
    return (
        <div >
            <div >

                <div >
                    <Image src={imageUrl} alt='destinationName' width={600} height={500} className='w-auto h-auto' ></Image>
                </div>

                <div>

                    <div className='flex gap-1 py-1'>
                        <FaMapMarkerAlt /> <h2>{country}</h2>
                    </div>


                    <div className='flex justify-between p-2'>

                        <div >
                            <h1 className='text-2xl font-bold'>{destinationName}</h1>
                        </div>

                        <div className='text-2xl font-bold'> ${price}</div>
                    </div>

                    <div className='flex gap-2 p-2'>
                        <SlCalender /> {duration}
                    </div>
                           
                    <Link href={`/destination/${_id}`}><Button className="text-cyan-500"variant="ghost"><IoEnterOutline />Book Now</Button></Link>
                </div>
            </div>
        </div>

    );
};

export default DestinationCard;