import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../api/themoviedb-movies-api';
import css from './MovieCast.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const castEndPoint = `movie/${movieId}/credits`;

  useEffect(() => {
    async function fetchMovieCast(params, endPoint) {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(params, endPoint);
        setCast(data.cast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast({}, castEndPoint);
  }, [castEndPoint]);

  return (
    <>
      <ul className={css.castList}>
        {cast &&
          cast.length > 0 &&
          !error &&
          cast.map(({ id, name, character, profile_path }) => {
            return (
              <li className={css.castItem} key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `http://www.suryalaya.org/images/no_image.jpg`
                  }
                  alt="actor"
                  loading="lazy"
                  width={180}
                  height={270}
                />
                <div className={css.castInfo}>
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}
        {cast.length === 0 && !loading && (
          <ErrorMessage message="Sorry, we don't have any credits for this movie" />
        )}
        {loading && <Loader loading={loading} />}
        {error && <ErrorMessage />}
      </ul>
    </>
  );
}
