export default function Quotation() {
  return (
    <section
      className="min-h-screen bg-[#eef6ff] pt-28 pb-16 px-6"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Request a Free Quote
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <form className="grid gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Service Required
            </label>
            <select className="w-full border rounded-lg p-3 focus:outline-blue-500">
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>AC Service</option>
              <option>Cleaning</option>
              <option>Painting</option>
              <option>Carpentry</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Describe Your Issue
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Explain your issue"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Address
            </label>
            <textarea
              rows="2"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
              placeholder="Enter address"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Quote
          </button>
        </form>
      </div>
    </section>
  );
}
