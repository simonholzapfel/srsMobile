import React from 'react';
import {StyleSheet, View} from 'react-native';

const Elevated = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#465062',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#f5f5f1',
        padding: 20,
        borderRadius: 10
    }
});

export default Elevated;