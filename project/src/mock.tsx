import { Film } from './types/film-type';
import {Review} from './types/review-type';

const FILMS_COUNT = 20;
const REVIEWS_COUNT = 5;

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
  isFavorite: false,
  actors: ['Some Person', 'Another Person'],
  reviews: ['awdjdawd', 'awdwad', 'jddljhskskd', 'jvpewdaj']
};

const review: Review = {
  comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  id: 1,
  date: 'Tue Mar 28 2023 19:36:27',
  rating: 8.9,
  user: {
    id: 4,
    name: 'Kate Muir'
  }};

const makeFilmsArray = (count: number) => {
  const result = [];
  for(let i = 1; i <= count; i++) {
    const newFilm = Object.assign({}, film);
    newFilm.id = i;
    result.push(newFilm);
  }

  return result;
};

export const makeReviewsArray = () => {
  const result = [];
  for(let i = 1; i <= REVIEWS_COUNT; i++) {
    const newReview = Object.assign({}, review);
    newReview.id = i;
    result.push(newReview);
  }

  return result;
};

export const FILMS: Film[] = makeFilmsArray(FILMS_COUNT);

