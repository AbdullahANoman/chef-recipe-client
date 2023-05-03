import React from 'react';
import ChefsCards from '../../Components/ChefsCards/ChefsCards';

const ChefCardsLayout = ({chefsData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4  my-container'>
            <div className='col-span-3'>
                <ChefsCards chefsData={chefsData}></ChefsCards>
            </div>
            <div>
                right section
            </div>
        </div>
    );
};

export default ChefCardsLayout;