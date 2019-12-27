import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    Dashboard: {
        screen: Dashboard
    },
});

const AppNav = createAppContainer(AppNavigator);

export default AppNav;
