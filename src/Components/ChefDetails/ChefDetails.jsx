import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <p>This is chef details page</p>
        </div>
    );
};

export default ChefDetails;