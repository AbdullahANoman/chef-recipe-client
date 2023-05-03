import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefDetails = () => {
  const chef = useLoaderData();
  const {
    name,
    picture,
    experience_years,
    num_recipes,
    likes,
    description,
    recipes,
  } = chef[0];
  // const {ingredients,cookingMethod,rating} =
  console.log(chef);
  return (
    <div className=" bg-sky-800 my-container text-white">
      <div className="my-container grid md:grid-cols-2 grid-cols-1 gap-5  ">
        <div>
          <img src={picture} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-center">{name}</h2>
          <p className="text-xl mt-3">{description}</p>
          <p className="text-xl mt-3 font-semibold">
            Years of experience : {experience_years}
          </p>
          <p className="mt-3 text-xl font-semibold">
            Number of Recipe : {num_recipes}
          </p>
          <p className="mt-3 text-xl font-semibold">Likes : {likes}</p>
        </div>
      </div>
      <p className="text-2xl text-center font-bold">Some Recipe </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {recipes.map((recipe,index) => (
          <Recipe key={index} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
