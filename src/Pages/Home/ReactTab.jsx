import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ReactTab = () => {
  const [loadToys, setLoadToys] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  console.log(loadToys);
  useEffect(() =>{
    AOS.init();
   }, [])

  useEffect(() => {
    fetch("https://toy-universe-server-gamma.vercel.app/addToys")
      .then((res) => res.json())
      .then((data) => setLoadToys(data));
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const categories = [...new Set(loadToys.map((item) => item.categories))];
  const category = categories.slice(0, 3);

  return (
    <div className="mt-48">
<div className="text-center bg-slate-200 lg:w-1/2 mx-auto w-max px-3 py-8" data-aos="fade-down">
        <h2 className="font-bold lg:text-3xl text-2xl mb-4 text-gray-700">
        Top Most Categories Toys
        </h2>
        <p className="font-bold text-gray-700 w-80 mx-auto lg:w-full">
        This Categories toys are mostly viewed and purchased by our users. <br />{" "}
        You can get more info by click on details button.
        </p>
      </div>


      <div className="md:w-4/5 md:mx-auto mt-10">
        <Tabs>
          <TabList className="md:bg-gray-300 p-3">
            <Tab className="md:w-1/2 md:mx-auto ml-10">
              <div className="md:space-x-10 space-x-4">
                <div className="tabs md:space-x-10">
                  <a className="tab tab-lifted tab-active md:space-x-20 space-x-4 font-bold btn">
                    {category.map((cate, index) => (
                      <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={activeTab === index ? "active" : ""}
                      >
                        {cate}
                      </button>
                    ))}
                  </a>
                </div>
              </div>
            </Tab>
          </TabList>

          <TabPanel className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {loadToys
              .filter((toy) => toy.categories === category[activeTab])
              .map((toy, index) => (
                <div key={index}>
                  <div className="card mx-4 md:w-96 bg-base-100 shadow-xl p-3">
                    <figure>
                      <img
                        src={toy.photoUrl}
                        alt="doll"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                       {toy.toyName}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p className="text-base text-gray-600 font-semibold">Price: ${toy.price}</p>
                      <p className="text-base text-gray-600 font-semibold">Rating: {toy.rating}</p>
                      <div className="card-actions justify-end">
                       <Link to={`/details/${toy._id}`}> <button className="btn btn-primary">View Detail</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );

};

export default ReactTab;




