import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MainMenu from "./components/MainMenu";
import TopBar from "./components/TopBar"

class MainView extends Component{
  render(){
    return(<MainMenu></MainMenu>);
  }
}

//background #f5f5f1
//background2 #DBE2E9
//dark #465062
//green #26d07c

export default function App() {
  return (
    <MainView></MainView>
  );
}