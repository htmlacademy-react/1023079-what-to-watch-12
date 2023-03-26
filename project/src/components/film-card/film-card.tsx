import React from 'react';
import {Link} from 'react-router-dom';
import { Film } from '../../types/film-type';
import { useState } from 'react';
import FilmCardPlayer from '../player/player';

type Props = {
  film: Film;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function FilmCard(props: Props): JSX.Element{
  const {name, posterImage, id} = props.film;
  const {onMouseEnter, onMouseLeave} = props;
  const [isActive, setIsActive] = useState(false);

  const mouseOverHandler = () => {
    onMouseEnter();
    setIsActive(true);
  };

  const mouseOutHandler = () => {
    onMouseLeave();
    setIsActive(false);
  };

  return (
    <article
      onMouseEnter={mouseOverHandler}
      onMouseLeave={mouseOutHandler}
      className="small-film-card catalog__films-card"
    >
      {
        isActive ? <FilmCardPlayer videoSrc={props.film.videoLink} posterSrc={props.film.posterImage} /> :
          <div className="small-film-card__image">
            <img src={posterImage} alt={name} width="280" height="175" />
          </div>
      }
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
