import React, {useState} from 'react';
import {  } from 'react-native';
import {AppLoading} from 'expo';
import MainNavigator from './navigations/MainNavigator';
import Login from './screens/Login';
import FirstLaunch from './screens/FirstLaunch';
import {enableScreens} from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import deckReducer from './store/reducers/decks';
import userReducer from './store/reducers/users';

enableScreens(); //for increased performance

const rootReducer = combineReducers({
  decks: deckReducer,
  users: userReducer,
})
const store = createStore(rootReducer);

const App = () => {
  const [firstLaunch, setFirstLaunch] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [appLoaded, setAppLoaded] = useState(false);

  const loadAppResources = () => {
    console.log("Loading app resources!")
  };

  if(!appLoaded){
    return <AppLoading startAsync={loadAppResources} onFinish={() => setAppLoaded(true)}/>
  }
  if(firstLaunch){
    return <FirstLaunch onFinish={() => setFirstLaunch(false)}/>;
  }
  if(!loggedIn){
    return <Login onFinish={() => setLoggedIn(true)}/>;
  }

  return <Provider store={store}><MainNavigator/></Provider>;
}

export default App;