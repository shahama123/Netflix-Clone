import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { imageUrl } from "../Constants/Constants";

const Cards = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div className="bg-black pb-10 font-light">
      <h1 className="text-white text-lg pt-5 pl-10 md:text-2xl">
        {props.title}
      </h1>
      <div className="scrollbar flex overflow-x-scroll gap-5 pl-10 ">
        {movies.map((item, index) => (
          <img
            className={
              props.isSmall
                ? "md:w-28 md:h-36 w-20 h-28 rounded-md mt-7 hover:scale-[1.07]  transition-transform  duration-300"
                : "md:w-60 md:h-56 w-52 h-48 rounded-md mt-7 hover:scale-[1.07]  transition-transform  duration-300"
            }
            src={`${imageUrl + item.poster_path}`}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
