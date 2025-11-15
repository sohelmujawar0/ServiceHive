
import Services from "../Services";
const ServicesSection = () => {
  const service = Services.map((srv)=>{
      return <div className="p-2 w-[300px] bg-amber-50 rounded-3xl
           transform transition-transform duration-300
           hover:scale-105 hover:shadow-lg hover:bg-amber-100
           mb-30 " >
          <img src={srv.icon} width={200} alt="serviceimg"/>
              <h1 className="text-4xl" > {srv.serviceName} </h1>
              <h1> {srv.description} </h1>
              <input type="checkbox"/> <h1 className="inline text-3xl " >Add to wishlist</h1>
            </div>
  })
  return <div className="mt-50 mb-10 " >
           <h1 className="flex justify-center text-7xl mb-30 " >Our services</h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center" >
             {service}
           </div> 
            </div>
}
export default ServicesSection;
