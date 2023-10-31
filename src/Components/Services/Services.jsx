// import { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import ServicesCard from "./ServicesCard";

const Services = () => {

  //DRY --> Do not Repeat Yourself
  const services = useServices();
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);

  
  return (
    <div className="mt-4 mb-10">
      <div className="text-center py-6 space-y-3">
        <h3 className="text-2xl text-orange-500">Service</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p className="w-1/2 flex mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      
    </div>
  );
};

export default Services;
