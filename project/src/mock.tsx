import { FilmType } from './types/film-type';

const FILMS_COUNT = 20;

const film: FilmType = {
  name: 'adwdad',
  posterImage: 'img/macbeth.jpg',
  previewImage: 'img/macbeth.jpg',
  backgroundImage: 'img/macbeth.jpg',
  backgroundColor: '#FFF',
  videoLink: 'fsef',
  previewVideoLink: 'sef',
  description: 'awdawd',
  rating: 8.0,
  scoresCount: 60,
  director: 'awd',
  starring: [
    'waddwad'
  ],
  runTime: 90,
  genre: 'drama',
  released: 2000,
  isFavorite: false
};

const makeFilmsArray = (count: number) => {
  const result = [];
  for(let i = 0; i < count; i++) {
    const newFilm = Object.assign({}, film);
    newFilm.id = i;
    result.push(newFilm);
  }

  return result;
};

export const FILMS: FilmType[] = makeFilmsArray(FILMS_COUNT);
