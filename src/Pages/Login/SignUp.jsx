import React from 'react';
import Lottie from "lottie-react";
import signUp from "../../assets/login/signup.json";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="mx-24 mt-12 mb-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
          <div>
            <Lottie animationData={signUp} loop={true} />
          </div>
  
          <div className=" pt-14">
            <div className="hero w-full h-max bg-base-200">
              <div className="hero-content flex-col lg:flex-row py-10">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 px-10">
                  <div className="card-body">
                    <form>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="name"
                          name="name"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          name="email"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="text"
                          placeholder="password"
                          name="password"
                          className="input input-bordered"
                        />
                     
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo Url</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Photo Url"
                          name="photo"
                          className="input input-bordered"
                        />
                     
                      </div>

                      <div className="form-control mt-6">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Sign UP"
                        />
                      </div>
                     
                    </form>
                    <p className="my-4 text-center">
                      Already Logged in?{" "}
                      <Link className="text-indigo-700 font-bold" to="/login">
                        visit Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;