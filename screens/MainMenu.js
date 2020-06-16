import React, {} from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import ContinueDeck from '../components/ContinueDeck';
import DeckOverview from '../components/DeckOverview';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MainMenu = props => {
  //todo add activity
  return (
    <View style={styles.root}>
      <ContinueDeck navigation={props.navigation}/>
      <DeckOverview style={styles.deckOverview} navigation={props.navigation}/>
    </View>
  );
}

MainMenu.navigationOptions = ({navigation}) => ({
  headerRight: () => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item 
      title="Search"
      iconName="md-search"
      onPress={() => {
        navigation.navigate('Search');
      }}
    />
    <Item
      title="Profile"
      iconName="md-person"
      onPress={() => {
        navigation.push('UserProfile');
      }}
    />
  </HeaderButtons>
  )
});

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