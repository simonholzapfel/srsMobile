import React, {useState} from 'react';
import { StyleSheet, FlatList, ScrollView, View, Text} from 'react-native';
import ContinueDeck from '../components/ContinueDeck';
import DeckOverview from '../components/DeckOverview';

const MainMenu = props => {
    return (
        <View style={{...styles.root, ...props.style}}>
          <ContinueDeck style={styles.continueDeck}/>
          <DeckOverview style={styles.deckOverview}/>
        </View>
      );
}

const styles = StyleSheet.create({
      continueDeck:{
        width: '95%',
        height: '20%',
        backgroundColor: '#26d07c',
        padding: 5,
      },
      deckOverview:{
        
      },
      root: {

      }
});

export default MainMenu;