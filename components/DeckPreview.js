import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const DeckPreview = props => {
    let finStyle = {...styles.View, ...props.style}
    finStyle.width = finStyle.height*0.6

    return (
        <TouchableOpacity onPress={() => {props.navigation.navigate({
            routeName: 'Deck',
            params: {
                deckId: props.id
            }
        })}}>
            <View style={finStyle}>
                <Text>Id is {props.id}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    View:{
        backgroundColor: 'red',
        borderColor: 'black',
        borderRadius: 15,
        alignItems:"center"
    }
});

export default DeckPreview;