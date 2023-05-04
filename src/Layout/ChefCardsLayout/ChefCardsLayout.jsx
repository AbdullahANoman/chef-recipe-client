import React from "react";
import ChefsCards from "../../Components/ChefsCards/ChefsCards";

import RightSide from "../../Components/RightSide/RightSide";
import Bottom from "../../Bottom/Bottom";

const ChefCardsLayout = ({ chefsData }) => {
  return (
    <>
      <div className="grid   md:grid-cols-4 md:py-20 gap-10   my-container">
        <div className="col-span-3">
          <ChefsCards chefsData={chefsData}></ChefsCards>
        </div>
        <div className=" sm:ml-[100px] md:ml-0">
          <div>
          <RightSide></RightSide>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <Bottom></Bottom>
      </div>
    </>
  );
};

export default ChefCardsLayout;
