import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import ContinueDeck from '../components/ContinueDeck';
import DeckOverview from '../components/DeckOverview';
import Colors from "../constants/Colors";
import Activity from "../components/Activity";
import { Ionicons } from '@expo/vector-icons';

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
  },
  headerRight: () => <TouchableOpacity onPress={() => {console.log("pressed button")}}>
    <View style={styles.iconContainerView}>
      <Ionicons name="md-pizza" size={25} color="white"/>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
      deckOverview:{
        flex: 1
      },
      root: {
        flex: 1,
        alignItems: "center",
      },
      iconContainerView: {
        marginRight: Dimensions.get('window').width/80
      }
});

export default MainMenu;