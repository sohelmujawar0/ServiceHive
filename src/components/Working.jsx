export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        How It Works
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">

        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="Choose Service"
            className="w-20 mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-3">1. Choose a Service</h3>
          <p className="text-gray-600">
            Select from our wide range of trusted home services tailored for your needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
            alt="Book Slot"
            className="w-20 mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-3">2. Book Your Slot</h3>
          <p className="text-gray-600">
            Pick your preferred date & time. We assign a verified ServiceHive professional.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/951/951628.png"
            alt="Get It Done"
            className="w-20 mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-3">3. Get It Done</h3>
          <p className="text-gray-600">
            Our expert arrives on time and completes the job with guaranteed satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
}
