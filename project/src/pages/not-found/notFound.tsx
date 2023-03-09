import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <React.Fragment>
      <p>Page not found</p>
      <Link to='/'>Вернуться на главную</Link>
    </ React.Fragment>
  );
}
