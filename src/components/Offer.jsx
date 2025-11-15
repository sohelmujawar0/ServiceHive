const FlashingOffer = () => {
  return (
    <div className="overflow-hidden bg-indigo-600 py-2 mt-10">
      <div className="animate-marquee whitespace-nowrap text-white font-bold text-lg">
        🎉 Flash Offer: 50% off on Plumbing Services! &nbsp; | &nbsp;
        ⚡ AC Servicing at ₹1499 only! &nbsp; | &nbsp;
        🛠️ Electrical Repairs at best rates! &nbsp; | &nbsp;
        ⚡ 20% OFF on First Service Booking! &nbsp; | &nbsp;
        🏠 Same-Day Service Guaranteed – Book Now!
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FlashingOffer;
