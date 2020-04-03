import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors'
import DeckPreview from './DeckPreview';

const ContinueDeck = props => {
    return(
        <View style={{...props.style, ...styles.root}}>
            <DeckPreview id={props.id} navigation={props.navigation} style={styles.preview}/>
            <View>
                <Text>Continue last deck</Text>
            </View>
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
        borderRadius: 12,
        marginRight: 4,
    }
});

export default ContinueDeck;