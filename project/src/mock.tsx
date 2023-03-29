import { Film } from './types/film-type';

const FILMS_COUNT = 20;

const film: Film = {
  id: 1,
  name: 'adwdad',
  posterImage: 'img/what-we-do-in-the-shadows.jpg',
  previewImage: 'img/macbeth.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#FFF',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
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

