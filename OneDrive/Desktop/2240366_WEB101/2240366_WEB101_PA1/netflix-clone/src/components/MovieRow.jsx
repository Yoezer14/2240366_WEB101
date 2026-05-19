import MovieCard from "./MovieCard";
import movies from "../data/movies";

function MovieRow() {
  return (
    <div className="movie-row">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
        />
      ))}
    </div>
  );
}

export default MovieRow;