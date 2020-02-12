import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MainMenu from "./components/MainMenu";
import TopBar from "./components/TopBar"

class MainView extends Component{
  render(){
    //todo style view
    //todo show topbar?
    return(
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f1',
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      height: "100%"
    }}>
      <MainMenu style={{height: "90%"}}></MainMenu>
    </View>
    );
  }
}

//background #f5f5f1
//background2 #DBE2E9
//dark #465062
//green #26d07c

export default function App() {
  return (
    <MainView style={{height: "100%", width: "100%"}}></MainView>
  );
}
