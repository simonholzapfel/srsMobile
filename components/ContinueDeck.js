import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors'
import DeckPreview from './DeckPreview';

const getLastUsedDeckInformation = () => { //todo implement
    return {
        id: 1,
        name:"How to SRS",
    }
}


const ContinueDeck = props => {
    const info = getLastUsedDeckInformation();

    return(
        <View style={{...props.style, ...styles.root}}>
            <DeckPreview id={info.id} name={info.name} navigation={props.navigation} style={styles.preview}/>
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