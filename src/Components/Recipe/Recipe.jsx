import React, { useState } from "react";
import Rating from "react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
  FaHeart,
  FaRegHeart
} from "react-icons/fa";

const Recipe = ({ recipe }) => {
    const [favourate,setFavorate] = useState(true)
  const { name, ingredients, cookingMethod, rating } = recipe;
  console.log(recipe);
  const notify = () => toast("This Recipe Added Favourate List");

  return (
    <div className="card  bg-blue-500 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <p className="text-lg font-semibold">Ingredients</p>
        <ul>
          {ingredients.map((i) => (
            <li> -- {i}</li>
          ))}
        </ul>
        <p className="font-semibold text-lg">Cooking Method :</p>
        <p>{cookingMethod}</p>

        <div className="flex items-center gap-3">
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar className="text-yellow-500"></FaRegStar>}
            placeholderSymbol={<FaStar className="text-yellow-600"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />{" "}
          <small>{rating}</small>
        </div>
        
        <div className="flex  ">
        <p className="">This is recipe is your favourate </p>
        <button  onClick={()=>setFavorate(false)}  disabled={!favourate}>

        {
            favourate ? <FaRegHeart onClick={notify} className=""></FaRegHeart>  : <FaHeart className="text-red-500" ></FaHeart>
        }
        </button>
        <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
