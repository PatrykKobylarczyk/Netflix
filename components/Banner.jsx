import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constans/movie";

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
    <div>
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

      <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
    </div>
  );
};

export default Banner;
