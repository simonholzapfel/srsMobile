import React, {useState} from 'react';
import { StyleSheet, FlatList} from 'react-native';

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: '#f5f5f1',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  MainMenu: {
    flex: 2
  },
  TopBar: {
  }
});

//background #f5f5f1
//background2 #DBE2E9
//dark #465062
//green #26d07c

export default function App() {
  return (
    <FlatList />
  );
}
