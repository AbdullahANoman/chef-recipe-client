import React from 'react';
import ChefCard from './ChefCard';

const ChefsCards = ({chefsData}) => {
    // console.log(chefsData)
    const chefs = chefsData.chefs;
    // console.log(chefs)
    return (
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
                chefs.map(chef=>(
                    <ChefCard key={chef.id} chef={chef}></ChefCard>
                ))
            }
        </div>
    );
};

export default ChefsCards;