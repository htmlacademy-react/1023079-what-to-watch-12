import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FILMS } from './mock';

const PromoFilmInfo = {
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
      title={PromoFilmInfo.title}
      genre={PromoFilmInfo.genre}
      year={PromoFilmInfo.year}
      films={FILMS}
    />
  </React.StrictMode>,
);

