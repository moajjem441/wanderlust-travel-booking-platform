import DestinationCard from "@/components/DestinationCard";


const GetDestination =async () => {
    const res=await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    return (
        <div>
            <h1 className="text-3xl font-bold p-4">All Destinations</h1>
            <div className="grid grid-cols-3 p-5 gap-2">
                
            {
                destinations.map(destination =><DestinationCard key={destination._id}destination={destination}></DestinationCard>)
            }
            </div>
        </div>
    );
};

export default GetDestination;




