import BookingCard from "@/components/BookingCard";
import DeleteAlert from "@/components/DeleteAlert";
import EditDestinationCard from "@/components/EditDestinaitonCard";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;





  // ১. ডাটা ফেচ করা
  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store", // ডাটাবেসের লেটেস্ট আপডেট পাওয়ার জন্য
  });


//   //------------<sohoj e mone rakhar jonno>------
// if (!res.ok) return "Error!"; // সার্ভারে সমস্যা হলে
// const data = await res.json();
// if (!data) return "No Data!"; // ডাটাবেসে ডাটা না থাকলে



  // ২. রেসপন্স চেক করা
  if (!res.ok) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-red-500">Failed to load destination.</h1>
        <Link href="/destination"><Button>Go Back</Button></Link>
      </div>
    );
  }

  const destinationDetails = await res.json();

  // ৩. সেফটি চেক: ডাটা যদি null হয় (সবচেয়ে গুরুত্বপূর্ণ সমাধান)
  if (!destinationDetails) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-gray-500">Destination details not found.</h1>
        <Link href="/destination"><Button>Back to List</Button></Link>
      </div>
    );
  }

  // ৪. ডাটা নিশ্চিত হওয়ার পর ডেসট্রাকচার করা
  const { category, imageUrl, description, destinationName } = destinationDetails;

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4"> {/* max-w-2/3 এর বদলে স্ট্যান্ডার্ড ব্যবহার করা ভালো */}
        <div className="flex justify-between items-center mb-4">
          <Link href={'/destination'}><Button color="default" variant="flat">Back</Button></Link>
          
          <div className="flex gap-2">
            <EditDestinationCard destinationDetails={destinationDetails} />
            <DeleteAlert destinationDetails={destinationDetails} />
          </div>
        </div>

        {/* ৫. ইমেজের জন্য একটি কন্টেইনার রাখা ভালো */}
        <div className="relative w-full h-[400px] mb-6">
           <Image 
             src={imageUrl || "/placeholder.jpg"} 
             alt="destinationImage" 
             fill 
             className="rounded-xl object-cover"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 p-4">
            <div className="p-2">
              <h1 className="text-2xl font-bold mb-4">{destinationName || "Details"}</h1>
              
              <div className="space-y-4">
                <section>
                  <h2 className="font-bold text-lg text-cyan-600">Overview</h2>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </section>

                <section>
                  <h2 className="font-bold">Category: <span className="font-normal">{category}</span></h2>
                </section>

                <section>
                  <h2 className="font-bold text-lg text-cyan-600">Highlights</h2>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </section>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t flex items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" />
              <span className="text-xs text-gray-500">Curated by Wanderlust Team</span>
            </div>
          </Card>

          {/* Booking Card */}
          <div className="md:col-span-1">
             <BookingCard destinationDetails={destinationDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;