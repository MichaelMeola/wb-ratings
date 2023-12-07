import { useLoaderData, useNavigate } from 'react-router-dom';

import CreateRatingForm from '../components/CreateRatingForm';

export default function MovieDetailPage() {
  const { movie } = useLoaderData()
  const navigate = useNavigate()

  const { title, posterPath, overview } = movie

  const handleCreateRating = async (e, {score}) => {
    e.preventDefault()

    const res = await axios.post('/api/ratings', { score, movieId: movie.movieId})
    
    if(res.data) {
      navigate('/me')
    } else {
      alert('Unable to submit rating. Try again later.')
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <img src={posterPath} alt={title}  style={{width: '200px'}} />
      <p>{overview}</p>
      <br/>
      <h2>Rate this movie</h2>
      <CreateRatingForm onCreateRating={handleCreateRating} />
    </>
  );
}
