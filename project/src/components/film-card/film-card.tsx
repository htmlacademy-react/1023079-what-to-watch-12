import React from 'react';
import {Link} from 'react-router-dom';
import { Film } from '../../types/film-type';

type Props = {
  film: Film;
  onMouseOver: () => void;
}

export default function FilmCard(props: Props): JSX.Element{
  const {name, posterImage, id} = props.film;
  const {onMouseOver} = props;

  return (
    <article onMouseOver={onMouseOver} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
