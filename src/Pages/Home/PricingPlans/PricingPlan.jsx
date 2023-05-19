import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingPlan = () => {
  return (
    <div>
      <div className="text-center mb-14">
        <h2 className="text-indigo-700 font-bold text-xl mb-2">PRICING PLANS</h2>
        <h1 className="font-bold lg:text-3xl text-2xl mb-4 text-gray-700">
          We are Offering Competitive <br />
          Prices for Our Clients
        </h1>
        <p className="h-1 w-20 bg-indigo-700 mx-auto"></p>
      </div>


      <div className="grid lg:grid-cols-3 grid-cols-1 w-3/4 mx-auto mb-20">

        <div className="bg-slate-100 p-10">
          <h2 className="text-xl text-indigo-700 font-bold mb-2">Basic Plan</h2>
          <p className="text-base text-gray-600 mb-2">
            FOR SMALL SIZE BUSINESS
          </p>
          <hr />
          <h1 className=" text-gray-700 font-bold text-2xl mt-6 mb-4">
            $200.00 <span className="text-base font-bold">/Month</span>
          </h1>
          <div className="text-lg  text-gray-600 space-y-2">
           <div className="flex justify-between">
           <p>Stored Toys</p>
           <p className="text-indigo-700 "><FaCheck/></p>
           </div>
            <div className="flex justify-between">
            <p>preferable category</p>
            <p className="text-indigo-700 "><FaCheck/></p>
            </div>
           <div className="flex justify-between">
           <p>Bulk Option</p>
           <p className="text-red-600"><FaTimes/></p>
           </div>
            <div className="flex justify-between">
            <p>Customize Toys</p>
            <p className="text-red-600"><FaTimes/></p>
            </div>
          </div>
         
        </div>

        <div className="p-10 shadow-2xl">
          <h2 className="text-xl text-indigo-700 font-bold mb-2">Standard Plan</h2>
          <p className="text-base text-gray-600 mb-2">
          FOR MEDIUM SIZE BUSINESS
          </p>
          <hr />
          <h1 className=" text-gray-700 font-bold text-2xl mt-6 mb-4">
            $600.00 <span className="text-base font-bold">/Month</span>
          </h1>
          <div className="text-lg  text-gray-600 space-y-2">
           <div className="flex justify-between">
           <p>Stored Toys</p>
           <p className="text-indigo-700 "><FaCheck/></p>
           </div>
            <div className="flex justify-between">
            <p>preferable category</p>
            <p className="text-indigo-700 "><FaCheck/></p>
            </div>
           <div className="flex justify-between">
           <p>Bulk Option</p>
           <p className="text-red-600"><FaTimes/></p>
           </div>
            <div className="flex justify-between">
            <p>Customize Toys</p>
            <p className="text-red-600"><FaTimes/></p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-10">
          <h2 className="text-xl text-indigo-700 font-bold mb-2">Advanced Plan</h2>
          <p className="text-base text-gray-600 mb-2">
          FOR LARGE SIZE BUSINESS
          </p>
          <hr />
          <h1 className=" text-gray-700 font-bold text-2xl mt-6 mb-4">
            $900.00 <span className="text-base font-bold">/Month</span>
          </h1>
          <div className="text-lg  text-gray-600 space-y-2">
           <div className="flex justify-between">
           <p>Stored Toys</p>
           <p className="text-indigo-700 "><FaCheck/></p>
           </div>
            <div className="flex justify-between">
            <p>preferable category</p>
            <p className="text-indigo-700 "><FaCheck/></p>
            </div>
           <div className="flex justify-between">
           <p>Bulk Option</p>
           <p className="text-red-600"><FaTimes/></p>
           </div>
            <div className="flex justify-between">
            <p>Customize Toys</p>
            <p className="text-red-600"><FaTimes/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
