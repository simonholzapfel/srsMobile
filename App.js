import React, {useState} from 'react';
import { StyleSheet, FlatList, ScrollView, View, Text} from 'react-native';
import Header from './components/Header'
import ContinueDeck from './components/ContinueDeck';
import DeckOverview from './components/DeckOverview';

//background #f5f5f1
//background2 #DBE2E9
//dark #465062
//green #26d07c

const App = () => {

  //todo:
  // * perMissionsOk
  // * Login
  // * Storage
  let perMissionsOk = false;
  let loggedIn = true;
  if(perMissionsOk){

  }
  else if(!loggedIn){
    
  }

  return (
    <View style={styles.screen}>
      <Header title="SRS"/>
      <ContinueDeck style={styles.continueDeck}/>
      <DeckOverview style={styles.deckOverview}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f5f1',
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  continueDeck:{
    width: '95%',
    height: '20%',
    backgroundColor: '#26d07c',
    padding: 5,
  },
  deckOverview:{
    
  }
});

export default App;