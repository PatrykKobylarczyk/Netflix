import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constans/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

const Banner = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`${baseUrl}${
            movie && (movie.backdrop_path || movie.poster_path)
          }`}
          alt="Poster"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold select-none">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-w-2xl select-none">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          More Info{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
