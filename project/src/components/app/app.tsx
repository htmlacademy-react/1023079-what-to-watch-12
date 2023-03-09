import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import AddReview from '../../pages/add-review/AddReview';
import FilmPage from '../../pages/film/film';
import MainPage from '../../pages/main/main';
import MyList from '../../pages/my-list/myList';
import NotFound from '../../pages/not-found/notFound';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/signIn';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type FilmIds = {
  id: number;
}[]

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  filmIds: FilmIds;
}

export default function App({title, genre, year, filmIds}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Main}
            element = {
              <MainPage
                title={title}
                genre={genre}
                year={year}
                filmIds={filmIds}
              />
            }
          />
          <Route
            path = {AppRoute.SignIn}
            element = {<SignIn />}
          />
          <Route
            path = {AppRoute.MyList}
            element = {
              <PrivateRoute
                authorizationStatus = {AuthorizationStatus.NoAuth}
              >
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Film}
            element = {<FilmPage />}
          />
          <Route
            path = {AppRoute.AddReview}
            element = {<AddReview />}
          />
          <Route
            path = {AppRoute.Player}
            element = {<Player />}
          />
          <Route
            path = '*'
            element = {<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
