import MainPage from '../../pages/main/main';

type AppScreenProps = {
  someNewProps: number;
}

export default function App({someNewProps}: AppScreenProps): JSX.Element {
  return (
    <MainPage someProps={someNewProps}/>
  );
}
