import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const DeckPlayer = props => {
    <View style={styles.rootV}>
        <Text>Player for ID: {props}</Text>
    </View>
};

const styles = StyleSheet.create({
    rootV: {
        flex: 1
    }
});

export default DeckPlayer;