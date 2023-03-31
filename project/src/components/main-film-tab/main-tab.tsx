import { Film } from '../../types/film-type';
import {useParams} from 'react-router-dom';
import {OverviewTab} from '../film-tabs/overview-tab';
import {DetailsTab} from '../film-tabs/details-tab';
import {ReviewTab} from '../film-tabs/reviews-tab';

type Props = {
  film: Film;
}

function getCurrentTab(film: Film, currentTab: string): JSX.Element{
  switch(currentTab) {
    case 'details':
      return <DetailsTab film={film} />;
    case 'reviews':
      return <ReviewTab film={film} />;
    case 'overview':
      return <OverviewTab film={film} />;
    default:
      return <h1>sorry</h1>;
  }
}

export function MainTab({film}: Props): JSX.Element{
  const { tab } = useParams();
  const currentTab = tab ?? 'overview';
  return getCurrentTab(film, currentTab);
}

