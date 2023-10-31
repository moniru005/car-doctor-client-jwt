import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const BookService = () => {

    const service = useLoaderData();

  const { _id, title, price, service_id, img } = service;

  const {user} = useContext(AuthContext);

  const handleBookService = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email,
        img, 
        date,
        service: title,
        service_id: _id,
        price: price
    }
    console.log(booking);
    
    fetch('http://localhost:5000/bookings', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
          alert('Service book successfully')
        }
    })
   

  }

  return (
    <div>
      <h2 className="text-center text-3xl">Book Service:  
      <span className="font-bold pl-4 text-orange-600">{title} </span></h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="py-10  space-y-2">
          <h2 className="text-2xl font-semibold">
            Thanks for, You want to booking this Service
          </h2>
          <h3 className="text-xl">Please fill the below booking form</h3>
        </div>
        {/* Photo */}
        <div className="flex gap-5">
          <div className="form-control w-1/4">
            <label className="label">
              <span className="label-text">Service Photo</span>
            </label>
            <img src={img} alt="" />
          </div>
        </div>

        {/* Service Name , ID & Price*/}
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={title}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-1/4">
            <label className="label">
              <span className="label-text">Service Id</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={service_id}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-1/4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={'$' + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="mt-10"> 
          {/* Name & Date*/}
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="flex gap-5">
          <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                placeholder="Due Amount"
                defaultValue={'$ '+ price}
                className="input input-bordered"
                required
              />
            </div>
            
          </div>

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-500 text-white">
            booking Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
