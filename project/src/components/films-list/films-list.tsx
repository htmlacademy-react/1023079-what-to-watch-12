import {useState} from 'react';
import { FilmType } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type Props = {
  films: FilmType[];
}


export default function FilmsList(props: Props): JSX.Element {
  const films = props.films.slice(0, 8);

  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          onMouseOver={() => film.id && setActiveCard(film.id)}
          key={film.id}
          id={film.id}
          name={film.name}
          posterImage={film.posterImage}
        />))}
    </div>
  );
}
