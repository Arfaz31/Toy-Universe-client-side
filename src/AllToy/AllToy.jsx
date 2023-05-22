import React, { useContext, useEffect, useState } from "react";
import useTitle from "../UseTitle/UseTitle";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllToy = () => {
  useTitle("AllToy");
  const {user} =useContext(AuthContext)
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch('https://toy-universe-server-gamma.vercel.app/addToys')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

const handleSearch = () =>{
  fetch(`https://toy-universe-server-gamma.vercel.app/toySearchByText/${searchText}`)
  .then(res => res.json())
  .then((data) => {
    setToys(data)
  })
}


  return (
    <div className="w-3/4 mx-auto ">
      
      <h2 className="text-center font-bold text-3xl text-gray-600 mt-20 mb-3">All Toy Page</h2>
      <p className="text-center text-lg text-gray-500 mb-12">Here you can see the all toys that are added by seller</p>

      <div className="relative lg:w-1/2 w-max mx-auto mb-8">
        <input 
        onChange={(e) => setSearchText(e.target.value)}
        type="text" 
        placeholder="Search By Name" 
        className="input input-bordered w-full pr-16" /> 

        <button onClick={handleSearch} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
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
