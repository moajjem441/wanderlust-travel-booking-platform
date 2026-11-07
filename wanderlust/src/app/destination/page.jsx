import DestinationCard from "@/components/DestinationCard";

// নেক্সট জেএস-কে বিল্ড টাইমে স্ট্যাটিক জেনারেশন করা থেকে বিরত রাখবে
export const dynamic = "force-dynamic";

const GetDestination = async () => {
  let destinations = [];
  let isError = false;

  try {
    // ডাটাবেসের একদম লেটেস্ট আপডেট সরাসরি পাওয়ার জন্য cache: "no-store" যোগ করা হয়েছে
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination`, {
      cache: "no-store",
    });

    if (res.ok) {
      destinations = await res.json();
    } else {
      isError = true;
    }
  } catch (error) {
    console.error("Failed to fetch destinations:", error);
    isError = true;
  }

  // যদি সার্ভারে কোনো সমস্যা হয় বা এপিআই কানেক্ট না হয়
  if (isError) {
    return (
      <div className="text-center py-10">
        <h2 className="text-red-500 font-semibold text-xl">Failed to load destinations</h2>
        <p className="text-gray-400 text-sm mt-1">Please check your network or try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold p-4">All Destinations</h1>
      
      {/* সেফটি চেক: ডাটা খালি থাকলে সুন্দর একটি মেসেজ দেখাবে */}
      {destinations.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No destinations available right now.
        </div>
      ) : (
        // রেস্পনসিভ গ্রিড লেআউট (মোবাইলে ১ কলাম, ট্যাবে ২ কলাম, ডেক্সটপে ৩ কলাম)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GetDestination;