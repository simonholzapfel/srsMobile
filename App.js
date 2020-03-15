import React, {useState} from 'react';
import { StyleSheet, FlatList, ScrollView, View, Text} from 'react-native';
import Header from './components/Header'
import Login from './screens/Login';
import MainMenu from './screens/MainMenu';

//background #f5f5f1
//background2 #DBE2E9
//dark #465062
//green #26d07c

const App = () => {
  //todo:
  // * perMissionsOk
  // * Login
  // * Storage
  let storageAccess = false;
  let loggedIn = true;
  var content = <MainMenu/>;

  if(storageAccess){

  }
  if(!loggedIn){
    content = <Login/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="SRS"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f5f1',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  }
});

export default App;