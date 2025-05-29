import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovies } from '../../api/themoviedb-movies-api';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const movieByIdEndPoint = `movie/${movieId}`;
  const location = useLocation();
  const goBackLink = useRef(location.state || '/movies');

  useEffect(() => {
    async function fetchMovieById(params, endPoint) {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(params, endPoint);
        setMovie(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById({}, movieByIdEndPoint);
  }, [movieByIdEndPoint]);

  return (
    <>
      <Link to={goBackLink.current}>Go back</Link>

      {movie && !error && !loading && (
        <>
          <div>
            <h1>{movie.title}</h1>
            <ul>
              <li>
                <NavLink to="cast" className={buildLinkClass}>
                  Read about our cast
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" className={buildLinkClass}>
                  Get to know the reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
    </>
  );
}
