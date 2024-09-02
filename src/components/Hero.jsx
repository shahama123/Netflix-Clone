import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaPlay, FaPlus } from "react-icons/fa";
import axios from "../Axios";
import { imageUrl } from "../Constants/Constants";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      });
  }, []);

  return (
    <div className="relative ">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.61), #1111), url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
        className="bg-cover bg-top h-[100vh] relative pb-20"
      >
        {/* Dim the background image using a dark overlay */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="relative py-36 font-light  lg:px-28 px-10 ">
          <h2 className="text-white md:text-6xl max-w-xl text-3xl  font-bold ">
            {movie ? movie.original_title || movie.name : ""}
          </h2>
          <h4 className="text-white md:text-xl text-base pt-5 font-semibold">
            #1 in TV Shows Today
          </h4>

          <p className="text-white md:text-base mt-5 md:max-w-md flex-wrap text-sm max-w-xl  ">
            {movie ? movie.overview : ""}
          </p>

          <div className="flex gap-3 text-xs font-semibold md:text-sm">
            <button className="text-black  flex items-center rounded py-2 px-6 mt-8 bg-white transparent hover:text-white hover:bg-black ">
              <FaPlay className="mr-2" />
              Play
            </button>
            <button className="text-black flex items-center rounded py-2 px-6 mt-8 bg-white  hover:text-white hover:bg-black ">
              <FaPlus className="mr-2" />
              My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
