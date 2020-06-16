import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, ART, Dimensions} from 'react-native';
import Colors from '../constants/Colors'
import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';

const Activity = props => {
    return(
        <View style={{...props.style, ...styles.root}}>
            
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
        borderRadius: 12
    },
    swipeable: {
        flex:1
    },
    swipeableView:{
        height: 80,
        width: '80%',
        backgroundColor: Colors.background2
    }
});

export default Activity;