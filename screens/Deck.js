import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logic from '../logic/Logic';

const Deck = props => {
    const id = props.navigation.getParam('deckId');

    Deck.navigationOptions = navigationData => {
        const id = navigationData.navigation.getParam('deckId');
    
        //todo headercolor
        return {
            headerTitle: Logic.getTitleById(id)
        }
    }
    
    return <View style={{...styles.root, ...props.style}}><Text>Deck id: {id}</Text></View>
};

const styles = StyleSheet.create({
    root:{
        flex: 1
    }
});

export default Deck;