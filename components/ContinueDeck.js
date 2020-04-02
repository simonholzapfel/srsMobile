import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors'
import DeckPreview from './DeckPreview';

//todo: 
// * android no top margin ("connect" with header)
// * ios as bubble (current state)

const ContinueDeck = props => {
    return(
        <View style={{...props.style, ...styles.root}}>
            <DeckPreview id={props.id} navigation={props.navigation} style={styles.preview}/>
            <Text>Continue/Repeat Last used Deck</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: "center",
        marginTop: 10,
        width: '95%',
        height: 120,
        backgroundColor: Colors.primary,
        borderRadius: 12,
        flexDirection: "row"
    },
    preview: {
        height: 120,
        width: 72,
        borderRadius: 12
    }
});

export default ContinueDeck;