import { Film } from './types/film-type';

const FILMS_COUNT = 20;

const film: Film = {
  id: 1,
  name: 'adwdad',
  posterImage: 'img/what-we-do-in-the-shadows.jpg',
  previewImage: 'img/macbeth.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#FFF',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
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
  for(let i = 1; i <= count; i++) {
    const newFilm = Object.assign({}, film);
    newFilm.id = i;
    result.push(newFilm);
  }

  return result;
};

export const FILMS: Film[] = makeFilmsArray(FILMS_COUNT);

