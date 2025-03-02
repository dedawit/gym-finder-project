import React, { useEffect, useState } from "react";
import { NavBar } from "./../navbar/NavBar";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import AdBox from "../ad-box/AdBox";
import ReviewModal from "../review-modal/ReviewModal";

export const Card: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const gymInfo = location.state?.gymInfo || {
    name: "PowerFit Gym",
    rating: 5.0,
    reviewCount: 267,
    address: "222 Premium Blvd, New York",
    distance: "0.4 mi",
    features: [
      "Towel Service",
      "Sauna & Steam",
      "Rooftop Pool",
      "Executive Lounge",
    ],
    hours: "5:00 AM - 11:00 PM",
    price: 199,
    phone: "(207) 760-7216",
  };

  useEffect(() => {
    if (location.state?.showReviewModal) {
      setIsModalOpen(true);
    }
  }, [location.state]);

  return (
    <div className="bg-[#1d1f23] min-h-screen">
      <NavBar />
      <section className="relative mt-24 flex items-center min-h-[80vh]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative z-10 flex justify-center w-full">
          <div className="w-4/5 max-w-3xl mx-auto p-6 bg-black bg-opacity-80 text-white rounded-lg shadow-lg backdrop-blur-lg">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Gym profile"
                className="w-24 h-24 rounded-full border border-white object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">{gymInfo.name}</h2>
                <p className="text-gray-400">Open 24 Hours</p>
                <div className="text-yellow-500 text-lg">
                  ⭐ ⭐ ⭐ ⭐ ⭐ ({gymInfo.reviewCount} ratings)
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                  onClick={() => setIsModalOpen(true)}
                >
                  Leave a review
                </button>
              </div>
            </div>
            <div className="mt-4 bg-[#252525] p-4 rounded-md text-center">
              <p className="text-gray-400">GYM Location:</p>
              <p>{gymInfo.address}</p>
              <p>Distance: {gymInfo.distance}</p>
              <p className="text-red-500 font-bold">
                <a href={`tel:+1${gymInfo.phone.replace(/\D/g, "")}`}>
                  {gymInfo.phone}
                </a>
              </p>
            </div>
            <div className="flex justify-around mt-4 border-t border-gray-700 py-2">
              {[
                "Overview",
                "Experience",
                "Insurance",
                "Ratings",
                "About GYM",
                "Locations",
              ].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "text-[#ffa78b] border-b-2 border-[#ffa78b]"
                      : "text-white hover:text-[#830d0d]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-4">
              {activeTab === "Overview" && (
                <div>
                  <h3 className="text-lg font-semibold">Features:</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    {gymInfo.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p className="mt-2">Hours: {gymInfo.hours}</p>
                  <p>Price: ${gymInfo.price}</p>
                </div>
              )}
              {activeTab === "Experience" && <div>Experience details...</div>}
              {activeTab === "Insurance" && <div>Insurance information...</div>}
              {activeTab === "Ratings" && <div>Ratings and reviews...</div>}
              {activeTab === "About GYM" && <div>About the GYM...</div>}
              {activeTab === "Locations" && <div>Location details...</div>}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <AdBox
        title="Special Offer: 50% Off First Month"
        description="Join PowerFit today and get 50% off your first month's membership. Limited time offer!"
        imageUrl="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ctaText="Claim Offer Now"
        ctaLink="#"
      />
      <ReviewModal
        gymName={gymInfo.name}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
