import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer }from 'react-navigation';
import MainMenu from '../screens/MainMenu';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import UserProfile from '../screens/UserProfile';
import Deck from '../screens/Deck'; 
import Colors from '../constants/Colors';

const MainNavigator = createStackNavigator({
    MainMenu: MainMenu,
    Settings: Settings,
    Search:Search,
    UserProfile: UserProfile,
    Deck: Deck,
},
{
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primary,
      headerTitle: 'SRS'
    }
  }
);

export default createAppContainer(MainNavigator);