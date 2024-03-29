import React, { useEffect } from "react";
import teamOne from '../../../assets/team members/team-1.jpg'
import teamTwo from '../../../assets/team members/team-2.jpg'
import teamThree from '../../../assets/team members/team-3.jpg'
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const TeamMembers = () => {
  useEffect(() =>{
    AOS.init();
   }, [])

  return (
    <div className="mb-48">

<div className=" bg-slate-200 lg:w-1/2 w-3/4 mx-auto px-3 py-5 text-center mb-20" data-aos="fade-down">
        <h2 className="text-indigo-700 font-bold text-xl mb-2">TEAM MEMBERS</h2>
        <h1 className="font-bold lg:text-3xl text-2xl mb-4 text-gray-700">
        Professional Stuffs Always Ready to <br />
        Satisfy Our Customer With Their Unique Skills
        </h1>
        <p className="h-1 w-28 bg-indigo-700 mx-auto"></p>
      </div>

      <Marquee>
      <div className="card w-96 bg-base-100 shadow-xl mr-28 ">
  <figure><img src={teamOne} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Michael Thompson</h2>
    <p>Michael is an experienced toy engineer who excels in designing and developing mechanical toys.</p>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl mr-28 ">
  <figure><img src={teamTwo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Emily Johnson</h2>
    <p>Emily is a highly skilled toy designer specializing in creating imaginative and interactive toys for children of all ages.</p>
  </div> 
</div>

<div className="card w-96 bg-base-100 shadow-xl mr-28 ">
  <figure><img src={teamThree} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">David Rodriguez</h2>
    <p>David is a talented toy painter and finisher. He specializes in adding vibrant colors and intricate details to toys.</p>
  </div>
</div>
      </Marquee>
    </div>
  );
};

export default TeamMembers;
