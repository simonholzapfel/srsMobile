import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

const DeckPreview = props => {
    return (
        <TouchableOpacity onPress={() => {props.navigation.navigate({
            routeName: 'Deck',
            params: {
                deckId: props.id
            }
        })}}>
            <View style={{...props.style, ...styles.debugView}}>
                <Text>Id is {props.id}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    debugView:{
        backgroundColor: 'red',
        borderColor: 'black',
        borderRadius: 25,
        height :150,
        width: 90,
        margin: 7,
        alignItems:"center"
    }
});

export default DeckPreview;