import React from 'react';
import ChefsCards from '../../Components/ChefsCards/ChefsCards';

import RightSide from '../../Components/RightSide/RightSide';

const ChefCardsLayout = ({chefsData}) => {
    return (
        <div className='grid   md:grid-cols-4 md:py-20 gap-10  my-container'>
            <div className='col-span-3'>
                <ChefsCards chefsData={chefsData}></ChefsCards>
            </div>
            <div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default ChefCardsLayout;