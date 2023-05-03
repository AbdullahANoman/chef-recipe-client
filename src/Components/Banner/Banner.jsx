import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefCardsLayout from "../../Layout/ChefCardsLayout/ChefCardsLayout";

const Banner = () => {
    const chefsData = useLoaderData();
    
  return (
    <div>
      <div className="bg-gray-100 pb-40">
        <div className="my-container flex flex-col items-center justify-between lg:flex-row ">
          {/* Text Content */}
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <img src="https://i.ibb.co/drD9bqP/P3-OLGJ1-copy-1.png" alt="" />
            </div>
          </div>
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <div>
                <p className="text-7xl font-bold ">
                  One Step Closer To Your <br />{" "}
                  <span className="text-purple-400">Dream Job</span>
                </p>
              </div>

              <p className="text-base text-gray-700 md:text-lg">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link to="/" className=" md:w-auto md:mr-4 border border-none">
                <div className="inline-flex items-center justify-center w-full h-full btn-primary">
                  <p className=" ">Get Stared</p>
                </div>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <ChefCardsLayout chefsData={chefsData}></ChefCardsLayout>
    </div>
  );
};

export default Banner;
