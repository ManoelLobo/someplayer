import { StackNavigator, TabNavigator } from 'react-navigation';
import Trending from 'pages/trending';
import Search from 'pages/search';
import Album from 'pages/album';
import Footer from 'components/Footer';

const TrendingRoutes = StackNavigator({
  Trending: { screen: Trending },
  Album: { screen: Album },
}, {
  headerMode: 'none',
});

const Routes = TabNavigator({
  Trending: { screen: TrendingRoutes },
  Search: { screen: Search },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

export default Routes;
