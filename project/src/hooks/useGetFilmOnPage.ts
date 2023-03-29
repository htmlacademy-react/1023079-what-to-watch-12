import {useParams} from 'react-router-dom';
import {Film} from '../types/film-type';

export function useGetFilmOnPage(films: Film[]) {
  const {id} = useParams<{id: string}>();
  const filmOnPage = films.find((film) => film.id === Number(id));
  return filmOnPage || undefined;
}
