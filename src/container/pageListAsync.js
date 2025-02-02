import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const HomePage = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
