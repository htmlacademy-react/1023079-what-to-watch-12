import { Film } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

const FILMS_LIKE_THIS_COUNT = 4;

type Props = {
  films: Film[];
  filmInPage: Film;
}

export function FilmsLikeThis(props: Props): JSX.Element {
  const films = props.films.filter((film) => film.genre === props.filmInPage.genre).slice(0, FILMS_LIKE_THIS_COUNT);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <FilmCard key={film.id} film={film}/>
        )
      )}
    </div>
  );
}
