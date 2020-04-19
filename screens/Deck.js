import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Deck = props => {
    const id = props.navigation.getParam('deckId');
    const name = props.navigation.getParam('deckName');

    Deck.navigationOptions = navigationData => {
        //todo headercolor
        return {
            headerTitle: name
        }
    }
    
    return <View style={{...styles.root, ...props.style}}>
        <Text>Deck id: {id}</Text>
    </View>
};

const styles = StyleSheet.create({
    root:{
        flex: 1
    },
    image:{
        
    }
});

export default Deck;