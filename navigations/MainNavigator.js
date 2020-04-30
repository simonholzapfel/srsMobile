import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator }from 'react-navigation';
import MainMenu from '../screens/MainMenu';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import UserProfile from '../screens/UserProfile';
import Deck from '../screens/Deck'; 
import Colors from '../constants/Colors';
import DeckPlayer from '../screens/DeckPlayer';
import Login from '../screens/Login';
import FirstLaunch from '../screens/FirstLaunch';
import StartupScreen from '../screens/StartupScreen';

const srsNavigator = createStackNavigator({
    MainMenu: MainMenu,
    Settings: Settings,
    Search:Search,
    UserProfile: UserProfile,
    Deck: Deck,
    DeckPlayer: DeckPlayer,
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
  });

const AuthNavigator = createStackNavigator({
  Login: Login
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor:
      Platform.OS === 'android' ? 'white' : Colors.primary,
  }
});

const IntroNavigator = createStackNavigator({
  StartupScreen: StartupScreen,
  FirstLaunch: FirstLaunch
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor:
      Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitle: 'SRS'
  }
})

const MainNavigator = createSwitchNavigator({
  Intro: IntroNavigator,
  Auth: AuthNavigator,
  Srs: srsNavigator
});

export default createAppContainer(MainNavigator);