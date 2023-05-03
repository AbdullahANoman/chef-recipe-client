import React from "react";
import { Link } from "react-router-dom";

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
    <div className="card w-full  bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          style={{height:'150px' , width:'200px'}}
          alt="chef picture"
          className="w-25 h-25"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        
        <h4>Years of experience : {experience_years} years</h4>
        <h4>Numbers of recipes : {num_recipes}</h4>
        <h2>Likes : {likes}</h2>
        <div className="card-actions justify-end">
          <Link to={`/chefDetails/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
