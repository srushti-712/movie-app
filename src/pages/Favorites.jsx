import "../styles/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function favorites() {
  const { favorites } = useMovieContext();
  console.log("favorites", favorites);
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2> Your favorites</h2>

        <div className="movies-grid">
          {favorites.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default favorites;
