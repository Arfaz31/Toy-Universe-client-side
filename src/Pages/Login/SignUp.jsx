import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import signUp from "../../assets/login/signup.json";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../UseTitle/UseTitle";

const SignUp = () => {
  useTitle('SignUp')
  const { createUser, userUpdateData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignUp Successfully",
            showConfirmButton: false,
            timer: 1500,
          })
        );
        navigate("/");
        userUpdateData(result.user, name, photo)
          .then(() => {
            console.log("update");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch(error =>{
        setError(error.message)
      })
  };

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
                  <form onSubmit={handleSignUp}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        name="name"
                        className="input input-bordered"
                        required
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
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo Url</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo Url"
                        name="photo"
                        className="input input-bordered"
                        required
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

export default SignUp;
