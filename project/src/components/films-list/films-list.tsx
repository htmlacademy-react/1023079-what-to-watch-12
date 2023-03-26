import {useState} from 'react';
import { Film } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Film[];
}


export default function FilmsList(props: Props): JSX.Element {
  const films = props.films;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          onMouseEnter={() => setActiveCard(film.id)}
          onMouseLeave={()=> setActiveCard(0)}
          key={film.id}
          film={film}
        />))}
    </div>
  );
}
