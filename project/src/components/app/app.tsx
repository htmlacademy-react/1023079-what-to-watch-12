import MainPage from '../../pages/main/main';

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
    <MainPage
      title={title}
      genre={genre}
      year={year}
      filmIds={filmIds}
    />
  );
}
