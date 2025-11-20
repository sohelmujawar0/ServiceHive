export default function Hero(){
    return <div className="flex flex-col items-center mt-40 " >
           <h1 className="text-5xl text-amber-500 "><i>Reliable Home Services, Just a Click Away</i></h1>
           <p className="text-[22px] " >Book trusted plumbing, electrical, cleaning,
             and other home services in minutes.</p>
            <input type="checkbox" id="bookNowToggle" className="peer hidden" />

      <label
        htmlFor="bookNowToggle"
        className="mr-3 bg-blue-600 text-white p-2 rounded-[20px]
                  transform transition-transform duration-300 
                  hover:scale-105 hover:shadow-lg cursor-pointer mt-5"
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
           </div>
}