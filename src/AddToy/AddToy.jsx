import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Select from 'react-select';
import useTitle from '../UseTitle/UseTitle';
import Swal from "sweetalert2";


const options = [
    { value: "marvel", label: "Marvel" },
    { value: "avengers", label: "Avengers" },
    { value: "ninja", label: "Ninja" },
    { value: "transformer", label: "Transformer" },
  ];
const AddToy = () => {
    useTitle('AddToy')

    const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAddToy = event =>{
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value
    const quantity = form.quantity.value
    const description = form.description.value
    
  const addToy ={
    photoUrl:photo,
    toyName:toyName,
    name,
    email,
    price,
    categories: selectedOption.label,
    rating,
    quantity,
    description
  }
  console.log(addToy)
fetch('http://localhost:5000/addToys', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body:JSON.stringify(addToy)
})
.then(res => res.json())
.then(data =>{
    console.log(data)
    if(data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Toy is Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          })
    }
})

form.reset()


  }



    return (
        <div className="bg-base-200 w-4/5 mx-auto my-20 rounded-md p-4 ">
          <h2 className="text-center text-xl lg:text-3xl font-bold text-gray-700 py-5">Add Your Favourite Customize Toy</h2>
    
          <form onSubmit={handleAddToy}>
            <div className="card-body w-3/4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Seller Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold">Email</span>
                  </label>
                  <input
                    type="Email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="Seller Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    name="toyName"
                    placeholder="Toy Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold">Product Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product Url"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold ">Sub-category</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold"> Available quantity</span>
                  </label>
                  <input
                    type="text"
                    placeholder=" Available quantity"
                    name="quantity"
                    className="input input-bordered"
                    required
                  />
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="$"
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
           <div>
           <textarea placeholder="Product Description" name="description" className="textarea textarea-bordered textarea-md w-full mt-8" ></textarea>
           </div>
    
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="Add Toy"
                />
              </div>
            </div>
          </form>
        </div>
      );
};

export default AddToy;