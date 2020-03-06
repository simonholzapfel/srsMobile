import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ContinueDeck = props => {
    return(
        <View style={{...props.style, ...styles.root}}>
            <Text>Continue/Repeat Last used Deck</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    }
});

export default ContinueDeck;