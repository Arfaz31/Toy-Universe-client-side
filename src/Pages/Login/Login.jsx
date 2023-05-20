import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import login from "../../assets/login/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
const {logIn, googleSignIn} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/"
const [success, setSuccess] = useState("");
const [error, setError] = useState("");


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
  navigate(from, {replace:true});
  setSuccess(
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Login Successfully",
      showConfirmButton: false,
      timer: 1500,
    })
  );
})
.catch(error => {
  setError(error.message)
})

}

//google login
const handleSignInWithGoogle = () => {
  googleSignIn()
    .then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log("error massage", error.massage);
    });
};


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
                        required
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
                        required
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
                      onClick={handleSignInWithGoogle}
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
                  <p className="my-2 text-red-600 text-center">{error}</p>
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
