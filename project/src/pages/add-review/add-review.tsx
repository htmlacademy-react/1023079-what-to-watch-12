import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { FilmType } from '../../types/film-type';
import {useParams} from 'react-router-dom';
import Review from '../../components/add-review/review';

type Props = {
  films: FilmType[];
}

export default function AddReview(props: Props): JSX.Element {
  const paramId = useParams().id;
  const films = props.films;
  const filmForReview = films.find((film) => film.id === Number(paramId));

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Поделитесь своим мнением</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmForReview?.backgroundImage} alt={filmForReview?.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{filmForReview?.name}</a>
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
          <img src={filmForReview?.posterImage} alt={filmForReview?.name} width="218" height="327"/>
        </div>
      </div>
      <Review />
    </section>
  );
}
