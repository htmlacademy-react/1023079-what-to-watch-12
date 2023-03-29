import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Film } from '../../types/film-type';
import Review from '../../components/add-review/review';
import { useGetFilmOnPage } from '../../hooks/useGetFilmOnPage';

type Props = {
  films: Film[];
}

export default function AddReview(props: Props): JSX.Element {
  const film = useGetFilmOnPage(props.films) as Film;

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Поделитесь своим мнением</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>
      <Review />
    </section>
  );
}
