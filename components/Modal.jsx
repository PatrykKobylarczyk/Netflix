import {
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/solid";
import MuiModal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState([]);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((res) => res.json())
        .catch((error) => console.log(error.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  console.log(trailer);
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-4xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide "
    >
      <div className="bg-[#181818] rounded-lg">
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          {/* From React-Player-Documentation - padding-top: 56.25% - Player ratio: 100 / (1280 / 720) */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              pointerEvents: "none",
            }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex items-center space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 py-3 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="w-7 h-7 text-black" />
                Play
              </button>

              <button className="modalButton">
                <PlusIcon className="w-7 h-7" />
              </button>

              <button className="modalButton">
                <ThumbUpIcon className="w-7 h-7" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="w-6 h-6" />
              ) : (
                <VolumeUpIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-md px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-3/4">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>

                <div>
                  <span className="text-[gray]">Original language: </span>
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
