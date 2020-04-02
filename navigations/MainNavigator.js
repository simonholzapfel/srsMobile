import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer }from 'react-navigation';
import MainMenu from '../screens/MainMenu';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import UserProfile from '../screens/UserProfile';
import Deck from '../screens/Deck'; 

const MainNavigator = createStackNavigator({
    MainMenu: MainMenu,
    Settings: Settings,
    Search:Search,
    UserProfile: UserProfile,
    Deck: Deck,
});

export default createAppContainer(MainNavigator); //use this function only for root navigator