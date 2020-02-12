import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Deck from "./views/Deck";
import MainMenu from "./views/MainMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <MainMenu></MainMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});