import React, {} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const DeckListItem = props => {
    return <TouchableOpacity style={styles.root} onPress={props.onPress}>
        <Text>{props.deck.name}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    root: {

    }
});

export default DeckListItem;