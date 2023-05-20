import React, { useContext } from "react";
import Lottie from "lottie-react";
import login from "../../assets/login/login.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
const {logIn} = useContext(AuthContext)

const handleLogIn = event =>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value
console.log(email, password)

 logIn(email, password)
 .then(result =>{
  const user =result.user
  console.log(user)
})
.catch(error => console.log(error))

}


  return (
    <div className="mx-24 mt-12 mb-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
        <div>
          <Lottie animationData={login} loop={true} />
        </div>

        <div className=" pt-14">
          <div className="hero w-full h-max bg-base-200">
            <div className="hero-content flex-col lg:flex-row py-10">
              <div className="card w-full max-w-sm shadow-2xl bg-base-100 px-10">
                <div className="card-body">
                  <form onSubmit={handleLogIn}>
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
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered"
                      />
                    
                    </div>
                    <div className="form-control mt-6">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                      />
                    </div>
                    <p className="text-center">Or Login with</p>
                    <div className=" w-max mx-auto mt-3">
                      <button
                        className="btn btn-outline btn-primary"
                        type="submit"
                      >
                        {" "}
                        Google
                      </button>
                    </div>
                  </form>
                  <p className="my-4 text-center">
                    New to Hero Toys?{" "}
                    <Link className="text-indigo-700 font-bold" to="/signUp">
                      Sign Up
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

export default Login;
