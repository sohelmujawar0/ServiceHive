export default function Navbar({ refs }) {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        <i>ServiceHive</i>
      </h1>

      <input type="checkbox" id="navToggle" className="hidden peer" />

      <label
        htmlFor="navToggle"
        className="text-3xl font-bold cursor-pointer md:hidden"
      >
        ☰
      </label>

      <div
        className="fixed inset-0 bg-black/40 hidden peer-checked:flex md:hidden items-center justify-center"
      >
        <label htmlFor="navToggle" className="absolute top-4 right-5 text-white text-3xl cursor-pointer">
          ✕
        </label>

        <div className="bg-white w-72 p-6 rounded-2xl flex flex-col gap-6 text-lg text-center">
          <span onClick={() => scrollTo(refs.homeRef)} className="cursor-pointer">Home</span>
          <span onClick={() => scrollTo(refs.servicesRef)} className="cursor-pointer">Services</span>
          <span onClick={() => scrollTo(refs.howRef)} className="cursor-pointer">How it works</span>
          <span onClick={() => scrollTo(refs.testimonialRef)} className="cursor-pointer">Testimonials</span>
        </div>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        <span onClick={() => scrollTo(refs.homeRef)} className="relative cursor-pointer group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        <span onClick={() => scrollTo(refs.servicesRef)} className="relative cursor-pointer group">
          Services
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        <span onClick={() => scrollTo(refs.howRef)} className="relative cursor-pointer group">
          How it works
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        <span onClick={() => scrollTo(refs.testimonialRef)} className="relative cursor-pointer group">
          Testimonials
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        <input type="checkbox" id="bookNowToggle" className="peer hidden" />

        <label
          htmlFor="bookNowToggle"
          className="bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer"
        >
          Book now
        </label>

        <div className="fixed inset-0 bg-black/40 hidden peer-checked:flex items-center justify-center z-50">
          <div className="bg-white w-[380px] p-6 rounded-3xl relative">
            <label htmlFor="bookNowToggle" className="absolute top-3 right-3 text-xl cursor-pointer">
              ✕
            </label>

            <h2 className="text-2xl font-bold mb-4">Book a Service</h2>

            <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Your Name" />
            <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Phone Number" />
            <input className="w-full p-2 border rounded-lg mb-3" type="email" placeholder="Email" />
            <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Address" />
            <input className="w-full p-2 border rounded-lg mb-3" type="text" placeholder="Service Needed (e.g., Plumbing)" />
            <textarea className="w-full p-2 border rounded-lg mb-3 h-20" placeholder="Message (optional)"></textarea>

            <button className="w-full bg-blue-600 text-white p-2 rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
