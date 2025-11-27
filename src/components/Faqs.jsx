import { useState } from "react";

export default function FAQ() {
  // Track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      q: "What services does ServiceHive provide?",
      a: "We offer plumbing, electrical work, cleaning, appliance repair, AC servicing, painting, carpentry, pest control, and many more home maintenance services."
    },
    {
      q: "Are your professionals verified?",
      a: "Yes, all ServiceHive professionals go through background verification, skill assessment, and training before onboarding."
    },
    {
      q: "How do I book a service?",
      a: "Simply choose a service, select your preferred time slot, and confirm the booking. A verified expert will be assigned instantly."
    },
    {
      q: "Is there a cancellation fee?",
      a: "Most cancellations are free if done before the service professional is dispatched. Charges may apply for last-minute cancellations."
    },
    {
      q: "Do you offer service warranty?",
      a: "Yes, all our services come with a service warranty period depending on the type of job completed."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">

  <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
    Frequently Asked Questions
  </h2>

  <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

    {faqs.map((item, index) => (
      <div
        key={index}
        onClick={() => toggleFAQ(index)}
        className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {item.q}
          </h3>

          <span
            className={`text-xl text-gray-500 transform transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openIndex === index ? "max-h-screen mt-3" : "max-h-0"
          }`}
        >
          <p className="text-gray-600 text-sm sm:text-base">
            {item.a}
          </p>
        </div>

      </div>
    ))}

  </div>
</section>
  );
}
