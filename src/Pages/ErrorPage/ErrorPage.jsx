import React from "react";
import error from "../../assets/erropage/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto pb-10">
        <img src={error} alt=""/>
      </div>
      <div className="w-max mx-auto">
      <Link to="/">
      <button className="btn btn-primary">Back to Homepage</button>
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
