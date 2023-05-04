import React from "react";

const Bottom = () => {
  return (
    <div className="my-container text-white border p-5 mt-5 ">
      <p className="text-center uppercase text-2xl font-bold">Connect with us</p>
      <div>
        <div className="md:flex justify-center items-center gap-10 mt-10">
          <p className="text-xl uppercase">
            Please give me your email address , We will contact with you
          </p>
          <div className="md:flex gap-5">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="input input-bordered text-black  w-full max-w-xs"
          />
          <button className="btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
