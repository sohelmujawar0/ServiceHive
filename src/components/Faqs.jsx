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
      
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="max-w-3xl mx-auto px-6 space-y-6">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >

            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.q}
              </h3>

              {/* Toggle Icon */}
              <span className="text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer Section (expands smoothly) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{item.a}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
