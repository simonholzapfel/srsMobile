import React, {useState} from 'react';
import {  } from 'react-native';
import {AppLoading} from 'expo';
import Logic from './logic/Logic';
import MainNavigator from './navigations/MainNavigator';
import Login from './screens/Login';
import FirstLaunch from './screens/FirstLaunch';

const App = () => {
  const [firstLaunch, setFirstLaunch] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [appLoaded, setAppLoaded] = useState(false);

  const loadAppResources = () => {
    //todo also check for permissions
    //apploaded?
    //first launch?
    //logged in?
    Logic.fetch();
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

  return <MainNavigator/>;
}

export default App;