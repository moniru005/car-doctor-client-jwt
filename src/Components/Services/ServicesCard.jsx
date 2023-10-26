
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({ service }) => {
  const { title, img, price } = service || {};

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-4pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title items-center text-center">{title}</h2>
        <div className=" flex justify-between items-center text-orange-500 font-semibold">
          <p className="text-xl ">${price}</p>
          <button className="text"> <FaArrowRight></FaArrowRight> </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
