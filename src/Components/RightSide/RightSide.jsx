import React from "react";

const RightSide = () => {
  return (
    <div className="">
      <p className="text-2xl text-white font-bold">Our NearBy Restaurant</p>
      <div className="card w-64 shadow-xl mb-10 image-full mt-5 ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Shoes"
            style={{height:"350px"}}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">Foraged Fare</h2>
          <p>WE OFFER YOU A TABLE IN ONE OF THE MOST SPECIAL LOCATIONS </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Visit</button>
          </div>
        </div>
      </div>
      <div className="card w-64 shadow-xl mb-10 image-full">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="Shoes"
            style={{height:"350px"}}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">Sage & Salt.</h2>
          <p>TAKE A SEAT AND ENJOY OUR GASTRONOMY</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Visit</button>
          </div>
        </div>
      </div>
      <div className="card w-64 shadow-xl image-full">
        <figure>
          <img
            src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=180"
            alt="Shoes"
            style={{height:"350px"}}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">Lord of the Wings </h2>
          <p className="uppercase">Food is the key to happiness</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Visit</button>
          </div>
        </div>
      </div>
      <div className="card w-64 shadow-xl mt-10 image-full">
        <figure>
          <img
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=1380&t=st=1683214908~exp=1683215508~hmac=3fdf6188a6a13e3e186008ec9b4379689567b47c1087d670ef9e4250abf563dd"
            alt="Shoes"
            style={{height:"350px"}}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">Eat Pray Love</h2>
          <p className="uppercase">Come get your food fix!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
