import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToy = () => {
   const toy = useLoaderData()
   console.log(toy)
    const { user } = useContext(AuthContext);
 
const{_id, toyName} = toy
  const handleUpdateToy = event =>{
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value
    const description = form.description.value
    
  const updateToy ={
   toyName,
    price,
    quantity,
    description
  }
  console.log(updateToy)
  fetch(`https://toy-universe-server-gamma.vercel.app/updateToys/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body:JSON.stringify(updateToy)
})
.then(res => res.json())
.then(data =>{
    console.log(data)
    if(data.modifiedCount > 0){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Toy is Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          })
    }
})

form.reset()


  }



    return (
        <div className="bg-base-200 w-4/5 mx-auto my-20 rounded-md p-4 ">

          <h2 className="text-center text-xl lg:text-3xl font-bold text-gray-700 py-5">Update Information Of Your Toys</h2>
    <p className='text-center text-gray-600 text-lg font-bold'>Toy Name: {toyName}</p>
          <form onSubmit={handleUpdateToy}>
            <div className="card-body w-3/4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
    
    
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
    
              </div>
           <div>
           <textarea placeholder="Product Description" name="description" className="textarea textarea-bordered textarea-md w-full mt-8" ></textarea>
           </div>
    
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="Update Toy"
                />
              </div>
            </div>
          </form>
        </div>
      );
};

export default UpdateToy;