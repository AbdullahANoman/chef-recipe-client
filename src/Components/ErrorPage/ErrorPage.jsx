import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImage from '../../assets/error.jpg'
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);
  const message = error.error.message;
  return (
    <>
    <div className="h-[20vh] w-1/2 mx-auto">
    <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1380&t=st=1683146217~exp=1683146817~hmac=b9d4f3ac9e978a21d35dbebdad371674eb94d85554a65a22163741723ccd262a" alt="" />
    </div>
      <div className=" flex justify-center">
        <div className="flex justify-center items-end h-[50vh]">
          <p className="text-5xl mt-3">ERR</p>
          <div className="w-10 h-10 border-8 border-dotted rounded-full animate-spin mt-5 border-blue-400"></div>
          <p className="text-5xl mt-3">R</p>
        </div>
        <div>
            <p className=" flex justify-center items-end h-[50vh] text-5xl pl-5 ">{error.status}</p>
        </div>
      </div>
      <div className="flex  justify-center mt-5 text-center">
        <p className="text-4xl font-semibold">{message}</p>
      </div>
      <div className="text-center">
        <Link to="/" className=" btn mt-5">
          Back to homepage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
