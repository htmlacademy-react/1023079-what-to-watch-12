import {useState} from 'react';
import { FilmType } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type Props = {
  films: FilmType[];
}


export default function FilmsList(props: Props): JSX.Element {
  const films = props.films;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          onMouseOver={() => setActiveCard(film.id)}
          key={film.id}
          film={film}
        />))}
    </div>
  );
}
