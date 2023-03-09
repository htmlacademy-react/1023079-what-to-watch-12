import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound(): JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <p>Page not found</p>
      <Link to='/'>Вернуться на главную</Link>
    </ React.Fragment>
  );
}
