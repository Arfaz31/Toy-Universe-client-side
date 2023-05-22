import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const detailToy = useLoaderData()
    console.log(detailToy)
    return (
        <div className='bg-base-200 '>
            <h1 className='text-4xl text-center pt-10 pb-4 font-bold'>View Details Page</h1>
    <p className='text-center text-lg text-gray-800  '>Here you can see the details description of added toys</p>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    
    <img src={detailToy.photoUrl} className="w-2/5 rounded-lg shadow-2xl" />
    <div className='ml-10'>
      <h1 className="text-2xl font-bold">Seller name: {detailToy.name}</h1>
      <p className='text-gray-600 text-lg'>Email: {detailToy.email}</p>
      <p className=' pt-4 text-lg font-bold'>Toy Name: {detailToy.toyName}</p>
      <p className='text-gray-600 text-lg'>Price: $ {detailToy.price}</p>
      <p className='text-gray-600 text-lg'>Rating: {detailToy.rating}</p>
      <p className='text-gray-600 text-lg'>Available Quantity: {detailToy.quantity}</p>
      <p className="py-3 text-gray-600 text-lg">Description: {detailToy.description}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;