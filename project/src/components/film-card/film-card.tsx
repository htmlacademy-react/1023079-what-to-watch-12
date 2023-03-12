import React from 'react';
import { FilmType } from '../../types/film-type';

type Props = Pick<FilmType, 'name' | 'posterImage'>

export default function FilmCard(props: Props): JSX.Element{

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.posterImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{props.name}</a>
      </h3>
    </article>
  );
}
