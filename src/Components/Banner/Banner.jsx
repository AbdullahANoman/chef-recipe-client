import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import ChefCardsLayout from "../../Layout/ChefCardsLayout/ChefCardsLayout";
import LazyLoad from "react-lazy-load";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Banner = () => {
  const chefsData = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="bg-gradient-to-r from-[#070d31] to-[#9873FF] ">
      <div className=" pb-40 text-white ">
        <div className="my-container  flex flex-col items-center justify-between lg:flex-row  ">
          {/* Text Content */}
          <div>
          <LazyLoad offset={300}>
                <img
                  
                //   style={{ height: "600px", width: "600px"  }}
                  src="https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                  className="h-[600px] w-[600px] mt-10 md:mt-[100px] md:ml-[100px] "
                />
              </LazyLoad>
          </div>
          <div className="">
            <div className="mb-10 lg:max-w-lg   lg:pr-5 lg:mb-0 ">
              <div className="max-w-xl mb-6 lg:mt-8 sm:pt-42 ">
                
                  <p className="text-6xl font-bold sm:pt-20 font-mono mb-3">
                    Cooking Easier Than The Ever Before
                  </p>
                

                <p className="text-base text-gray-100 md:text-lg">
                  Our Chefs offer you perfect cooking, best served dishes with
                  fresh ingredients and old recipes. We have only carefully
                  sourced and seasonal ingredients in our disposal to make
                  rustic dishes. We provide you with daily self-made bread,
                  sourdough pizza, roasted fish-meat-vegetables and many more.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <div className=" md:w-auto md:mr-4 border border-none">
                  <div className="inline-flex items-center justify-center w-full h-full border px-6 py-6">
                    <p className=" ">Read More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChefCardsLayout chefsData={chefsData}></ChefCardsLayout>
    </div>
  );
};

export default Banner;
