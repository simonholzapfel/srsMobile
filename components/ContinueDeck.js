import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors'

//todo: 
// * android no top margin ("connect" with header)
// * ios as bubble (current state)

const ContinueDeck = props => {
    return(
        <View style={{...props.style, ...styles.root}}>
            <Text>Continue/Repeat Last used Deck</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: "center",
        marginTop: 10,
        width: '95%',
        height: '20%',
        backgroundColor: Colors.primary,
        borderRadius: 15
    }
});

export default ContinueDeck;