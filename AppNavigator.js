import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';

const DrawerStack = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Abc: {
    screen: Dashboard,
  },
});

const AppNav = createSwitchNavigator(
  {
    AuthLoading: Login,
    AppStack: DrawerStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppNav);
