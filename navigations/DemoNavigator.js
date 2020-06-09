import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer, }from 'react-navigation';
import DemoScreen from '../demo/DemoScreen';
import DemoDeck from '../demo/DemoDeck';
import Colors from '../constants/Colors';

const DemoNavigator = createStackNavigator({
    Screen: DemoScreen,
    Demo: DemoDeck,
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

export default createAppContainer(DemoNavigator);