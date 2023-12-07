import { Link, useLoaderData } from "react-router-dom";

export default function YourRatingsPage() {
  const { ratings } = useLoaderData()

  const ratingListItems = ratings.map(({ ratingId, score, movie, movieId }) => (
    <li key={ratingId}>
      <Link to={`/movie/${movieId}`}>{movie.title}</Link>: {score}
    </li>
  ))

  return (
    <>
      <h1>Your Ratings</h1>
      <ul>{ratingListItems}</ul>
    </>
  );
}