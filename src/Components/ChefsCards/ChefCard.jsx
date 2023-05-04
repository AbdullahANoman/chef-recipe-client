import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
  const {
    id,
    picture,
    name,
    experience_years,
    num_recipes,
    likes,
    description,
  } = chef;
  return (
    <div className="bg-gradient-to-r from-[#ffff] to-[#ffff] card w-full text-black hover:shadow-2xl   bg-base-100 shadow-xl">
      <figure>
        <LazyLoad offset={300}>
        <img
          src={picture}
          
        //   style={{height:'150px' , width:'200px'}}
          alt="chef picture"
          className="w-25 h-25 overflow-auto"
        />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        
        <h4 className="text-green-800 font-bold text-xl"> {experience_years} years of experience</h4>
        <h4>Numbers of recipes : {num_recipes}</h4>
        <h2>Likes : {likes}</h2>
        <div className="card-actions justify-end">
          <Link to={`/chefDetails/${id}`}><button className="btn btn-primary-2">View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
