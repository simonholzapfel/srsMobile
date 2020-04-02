import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors'

const Activity = props => {
    return(
        <View style={{...props.style, ...styles.root}}>
            <Text>User Activity and Statistics can be found here</Text>
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
    }
});

export default Activity;