import { Film } from '../../types/film-type';
import {Link} from 'react-router-dom';

type Props = {
  film: Film;
}

export function DetailsTab({film}: Props): JSX.Element {
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link to={`/films/${film.id}/overview`} className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link to={`/films/${film.id}/details`} className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${film.id}/reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {Array.isArray(film.actors) && film.actors.join(', ')}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{film.runTime}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </>
  );
}
