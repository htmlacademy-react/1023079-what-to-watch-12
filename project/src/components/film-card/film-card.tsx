import React from 'react';

export default function FilmCard() {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">Macbeth</a>
      </h3>
    </article>
  );
}
