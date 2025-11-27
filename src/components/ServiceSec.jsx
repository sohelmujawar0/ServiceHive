import Services from "../Services";

const ServicesSection = () => {
  const service = Services.map((srv, i) => (
    <div
      key={i}
      className="p-4 w-[300px] bg-amber-50 rounded-3xl
                 transform transition-transform duration-300
                 hover:scale-105 hover:shadow-lg hover:bg-amber-100"
    >
      <img src={srv.icon} width={200} alt="serviceimg" className="mx-auto" />

      <h1 className="text-3xl font-semibold mt-3">{srv.serviceName}</h1>

      <p className="text-gray-700 mt-1">{srv.description}</p>

      <div className="flex items-center gap-2 mt-3">
        <input type="checkbox" />
        <span className="text-xl">Add to wishlist</span>
      </div>
    </div>
  ));

  return (
    <div className="mt-12 mb-10">
      <h1 className="flex justify-center text-5xl font-bold mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {service}
      </div>
    </div>
  );
};

export default ServicesSection;
