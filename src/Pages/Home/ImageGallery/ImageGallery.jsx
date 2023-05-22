import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ImageGallery = () => {
  const [galleries, setGalleries] = useState([]);
 useEffect(() =>{
  AOS.init();
 }, [])
  useEffect(() => {
    fetch("https://toy-universe-server-gamma.vercel.app/photos")
      .then((res) => res.json())
      .then((data) => setGalleries(data));
  }, []);
  return (
    <div className="mt-24">
      <div className="text-center bg-slate-200 lg:w-1/2 mx-auto w-fit px-3 py-5" data-aos="fade-down">
        <h2 className="font-bold lg:text-3xl text-2xl mb-4 text-gray-700">
          Our Toys Photo Gallery
        </h2>
        <p className="font-bold text-gray-700 mb-3 w-80 mx-auto lg:w-full">
          Explore our unique toys. Our toys are made based on customer
          preferences. <br />
          This toys will be the best surprise gift for your children.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-12 mb-24 lg:grid-cols-3 gap-6 w-max mx-auto lg:w-max lg:mx-auto">
        {galleries.map((gallery) => (
          <div key={gallery._id}>

<div className="group h-96 w-80 pb-4">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <img className="h-full w-auto  rounded-xl object-cover shadow-xl shadow-black/40" src={gallery.image} alt="" />
      </div>

      <div className="absolute inset-0  h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        
        <div className=" min-h-full text-start py-20 px-5 ">
          <h1 className="text-2xl font-bold pb-1">{gallery.title}</h1>
          <p className="text-base pb-1">{gallery.short_description}</p>
          <p className="text-base pb-1">Price: {gallery.price}</p>
          <button className="mt-2 rounded-md bg-neutral-800 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
  </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

