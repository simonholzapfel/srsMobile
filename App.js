import React, {useState} from 'react';
import { StyleSheet, FlatList, ScrollView, View} from 'react-native';
import Header from './components/Header'
import ContinueDeck from './components/ContinueDeck';

//background #f5f5f1
//background2 #DBE2E9
//dark #465062
//green #26d07c

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="SRS"/>
      <ContinueDeck />
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f5f1',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
});

export default App;