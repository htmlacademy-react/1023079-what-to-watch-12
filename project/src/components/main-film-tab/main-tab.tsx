import { Film } from '../../types/film-type';
import {useParams} from 'react-router-dom';
import OverviewTab from '../film-tabs/overview-tab';
import DetailsTab from '../film-tabs/details-tab';
import ReviewTab from '../film-tabs/reviews-tab';

function getCurrentTab(film: Film, currentTab: string) {
  switch(currentTab) {
    case 'details':
      return <DetailsTab film={film} />;
    case 'reviews':
      return <ReviewTab film={film} />;
    default:
      return <OverviewTab film={film} />;
  }
}

export default function MainTab(film: Film) {
  const { tab } = useParams();
  const currentTab = tab ?? 'overview';
  return getCurrentTab(film, currentTab);
}

