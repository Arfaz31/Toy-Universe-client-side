import React from "react";
import useTitle from "../UseTitle/UseTitle";
import { Link, useLoaderData } from "react-router-dom";

const AllToy = () => {
  useTitle("AllToy");
  const toys = useLoaderData();
  return (
    <div className="w-3/4 mx-auto ">
      
      <h2 className="text-center font-bold text-3xl text-gray-600 mt-20 mb-3">All Toy Page</h2>
      <p className="text-center text-lg text-gray-500 mb-12">Here you can see the all toys that are added by seller</p>

      <div className="relative w-1/2 mx-auto mb-8">
        <input type="text" placeholder="Search By Name" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>

      <div className="w-full mb-40">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
            <th>Photo</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="shadow-xl">
           {toys.map((toy) =>
            <tr  key={toy._id}>
            <td>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img
                    src={toy.photoUrl}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>{toy.toyName}</td>
            <td>{toy.categories}</td>
            <td>{toy.name}</td>
            <td>$ {toy.price}</td>
            <td>{toy.quantity}</td>
            <th>
             <Link to={`/details/${toy._id}`}>
             <button className="btn btn-primary btn-xs">details</button>
             </Link>
            </th>
          </tr>
           )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
