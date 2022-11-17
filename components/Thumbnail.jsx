import Image from "next/legacy/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

const Thumbnail = ({ movie }) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative h-28 md:h-36 lg:h-40  min-w-[220px] cursor-pointer transition duration-200 ease-out md:min-w-[300px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
