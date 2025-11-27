export default function CustomerFeedback() {
  const feedbacks = [
    {
      name: "Ravi Kumar",
      service: "Electrical Repair",
      message: "Quick service and very polite technician. Pricing was transparent and fair."
    },
    {
      name: "Deepika Nair",
      service: "Deep Cleaning",
      message: "Amazing work! My home looks fresh and spotless. Highly recommended."
    },
    {
      name: "Amit Shah",
      service: "AC Servicing",
      message: "The technician explained everything clearly and my AC is cooling like new."
    },
    {
      name: "Priya Verma",
      service: "Plumbing",
      message: "Fast response and the leak was fixed perfectly. Great experience overall."
    }
  ];

  return (
    <section className="py-20 bg-white">

      {/* Section Title */}
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Customer Feedback
      </h2>

      {/* Feedback Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6">
        {feedbacks.map((fb, index) => (
          <div
            key={index}
            className="p-4 sm:p-7 bg-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{fb.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">{fb.service}</p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              “{fb.message}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
