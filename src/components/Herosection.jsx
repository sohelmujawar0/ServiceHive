export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-24 px-4 text-center">
      <h1 className="text-3xl sm:text-5xl text-amber-500 font-semibold leading-snug">
        <i>Reliable Home Services, Just a Click Away</i>
      </h1>

      <p className="text-lg sm:text-[22px] mt-3 max-w-xl">
        Book trusted plumbing, electrical, cleaning, and other home services in minutes.
      </p>

      <input type="checkbox" id="bookNowToggle" className="peer hidden" />

      <label
        htmlFor="bookNowToggle"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-[20px]
                   transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        Book now
      </label>

      <div className="fixed inset-0 bg-black/40 hidden peer-checked:flex items-center justify-center z-50 p-4">
        <div className="bg-white w-full max-w-[380px] p-6 rounded-3xl shadow-lg relative">

          <label
            htmlFor="bookNowToggle"
            className="absolute top-3 right-3 text-gray-600 text-xl cursor-pointer"
          >
            ✕
          </label>

          <h2 className="text-2xl font-bold mb-4">Book a Service</h2>

          <input className="w-full p-3 border rounded-lg mb-3" type="text" placeholder="Your Name" />
          <input className="w-full p-3 border rounded-lg mb-3" type="text" placeholder="Phone Number" />
          <input className="w-full p-3 border rounded-lg mb-3" type="email" placeholder="Email" />
          <input className="w-full p-3 border rounded-lg mb-3" type="text" placeholder="Address" />
          <input className="w-full p-3 border rounded-lg mb-3" type="text" placeholder="Service Needed (e.g., Plumbing)" />

          <textarea
            className="w-full p-3 border rounded-lg mb-3 h-24"
            placeholder="Message (optional)"
          ></textarea>

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:opacity-90">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
