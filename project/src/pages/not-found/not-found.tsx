import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

export default function NotFound(): JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <Logo />
      <p>Page not found</p>
      <Link to='/'>Вернуться на главную</Link>
    </ React.Fragment>
  );
}
