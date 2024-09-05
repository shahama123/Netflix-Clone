import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaPlay, FaPlus } from "react-icons/fa";
import axios from "../Axios";
import { imageUrl } from "../Constants/Constants";
import logo from "../assets/image.png";

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

          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
        className="bg-cover  bg-top w-full lg:h-[100vh] h-[80vh] relative pb-20"
      >
        {/* Dim the background image using a dark overlay */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="relative lg:pt-36 lg:pb-20 pt-28 pb-20 font-light  lg:px-28 px-10 ">
          <div className="flex  mb-2 ">
            <img src={logo} alt="netflix image" className="w-5" />
            <h1 className="text-slate-200 lg:text-xs text-xs font-normal">
              SERIES
            </h1>
          </div>

          <h2 className="text-white md:text-5xl max-w-xl text-3xl  font-bold ">
            {movie ? movie.original_title || movie.name : ""}
          </h2>
          <h4 className="text-white md:text-xl text-base pt-4 font-semibold">
            #1 in TV Shows Today
          </h4>

          <p className="text-white lg:text-sm mt-4 md:max-w-md flex-wrap text-xs max-w-xl  ">
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
