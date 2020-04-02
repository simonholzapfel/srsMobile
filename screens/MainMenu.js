import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import ContinueDeck from '../components/ContinueDeck';
import DeckOverview from '../components/DeckOverview';
import Colors from "../constants/Colors";
import Activity from "../components/Activity";

const MainMenu = props => {
  const ContinueID = 1; //development

    return (
        <View style={styles.root}>
          <ContinueDeck id={ContinueID} navigation={props.navigation}/>
          <Activity />
          <DeckOverview style={styles.deckOverview} navigation={props.navigation}/>
        </View>
      );
}

MainMenu.navigationOptions = {
  headerTitle: "SRS",
  headerStyle: {
    backgroundColor: Colors.primary
  }
}

const styles = StyleSheet.create({
      deckOverview:{
        flex: 1
      },
      root: {
        flex: 1,
        alignItems: "center",
      },
});

export default MainMenu;