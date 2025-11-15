export default function Navbar() {
  return (
    <nav className="flex gap-10 justify-between items-center mt-3.5">
      <h1 className="ml-3 text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        <i>ServiceHive</i>
      </h1>

      <a href="#" className="relative text-gray-800 font-medium group">
        Home
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="#" className="relative text-gray-800 font-medium group">
        Services
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="#" className="relative text-gray-800 font-medium group">
        How it works
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="#" className="relative text-gray-800 font-medium group">
        Testimonials
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </a>

       <input type="checkbox" id="bookNowToggle" className="peer hidden" />

      <label
        htmlFor="bookNowToggle"
        className="mr-3 bg-blue-600 text-white p-2 rounded-[20px]
                  transform transition-transform duration-300 
                  hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        Book now
      </label>

      <div
        className="fixed inset-0 bg-black/40 hidden 
                   peer-checked:flex items-center justify-center z-50"
      >
        <div className="bg-white w-[380px] p-6 rounded-3xl shadow-lg relative">

          <label
            htmlFor="bookNowToggle"
            className="absolute top-3 right-3 text-gray-600 text-xl cursor-pointer"
          >
            ✕
          </label>

          <h2 className="text-2xl font-bold mb-4">Book a Service</h2>

          <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Your Name" />
          <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Phone Number" />
          <input className="w-full p-2 border rounded-lg mb-3" type="email" placeholder="Email" />
          <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Address" />

          <input
            className="w-full p-2 border rounded-lg mb-3"
            type="text"
            placeholder="Service Needed (e.g., Plumbing)"
          />

          <textarea
            className="w-full p-2 border rounded-lg mb-3 h-20"
            placeholder="Message (optional)"
          ></textarea>

          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:opacity-90">
            Submit
          </button>
        </div>
      </div>
    </nav>
  );
}
