import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../UseTitle/UseTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const MyToy = () => {
    useTitle('MyToy')
    const{user} = useContext(AuthContext)
    const[myToys, setMyToys] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyToys(data))
    } ,[user])

    return (
        <div className="w-max mx-auto ">
      
      <h2 className="text-center font-bold text-3xl text-gray-600 mt-20 mb-3">My Toy Page</h2>
      <p className="text-center text-lg text-gray-500 mb-12">This is your personal toy collection page</p>

     

      <div className="w-full mb-40">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
            <th>Photo</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
              <th>Seller Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="shadow-xl">
           {myToys.map((myToy) =>
            <tr  key={myToy._id}>
            <td>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img
                    src={myToy.photoUrl}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>{myToy.toyName}</td>
            <td>{myToy.categories}</td>
            <td>{myToy.description.substring(0,25)}.....</td>
            <td>$ {myToy.price}</td>
            <td>{myToy.quantity}</td>
            <td>$ {myToy.rating}</td>
            <td>{myToy.name}</td>
            <th>
             <Link>
             <button className="btn btn-primary btn-xs">Update</button>
             </Link>
            </th>
            <th>
             <Link>
             <button className="btn btn-secondary btn-xs">Delete</button>
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

export default MyToy;