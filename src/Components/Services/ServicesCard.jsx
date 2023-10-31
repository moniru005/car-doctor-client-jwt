
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
  const {_id, title, img, price } = service || {};

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-4pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title items-center text-center">{title}</h2>
        <div className=" flex justify-between items-center text-orange-500 font-semibold">
          <p className="text-xl ">${price}</p>
          <Link to={`/book/${_id}`}>
          <button className="text btn btn-sm bg-orange-500 text-white">Book Now <FaArrowRight></FaArrowRight> </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
