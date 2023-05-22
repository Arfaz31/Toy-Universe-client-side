import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../UseTitle/UseTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Select from 'react-select';


const options =[
  { value: "price", label: "Lowest to Highest" },
  { value: "price", label: "Highest to Lowest" },
]

const MyToy = () => {
    useTitle('MyToy')
    const{user} = useContext(AuthContext)
    const[myToys, setMyToys] = useState([])
    const [selectedOption, setSelectedOption] = useState('');


    useEffect(()=>{
        fetch(`https://toy-universe-server-gamma.vercel.app/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyToys(data))
    } ,[user])

    const handleDelete = (_id) =>{
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`https://toy-universe-server-gamma.vercel.app/myToys/${_id}`,{
                 method: "DELETE"
               
             })
             .then(res => res.json())
             .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Toy has been deleted.',
                        'success'
                      )
                      const remaining = myToys.filter(myToy => myToy._id !== _id)
                      setMyToys(remaining)
                }
             })
            }
          })
    }




    return (
        <div className="w-max mx-auto ">
      
      <h2 className="text-center font-bold text-3xl text-gray-600 mt-20 mb-3">My Toy Page</h2>
      <p className="text-center text-lg text-gray-500 mb-12">This is your personal toy collection page</p>

      <div className="form-control mb-24 w-1/5">

                  <label className="label">
                    <span className="label-text text-lg text-gray-700 font-semibold ">Sub-category</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                
                </div>

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
             <Link to={`/updateToy/${myToy._id}`}>
             <button className="btn btn-primary btn-xs">Update</button>
             </Link>
            </th>
            <th>
             <Link>
             <button onClick={()=> handleDelete(myToy._id)} className="btn btn-secondary btn-xs">Delete</button>
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