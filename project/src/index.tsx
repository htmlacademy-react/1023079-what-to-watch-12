import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FILMS } from './mock';
import { PromoFilm } from './types/promo-film-type';


const PromoFilmInfo: PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilm={PromoFilmInfo}
      films={FILMS}
    />
  </React.StrictMode>,
);

