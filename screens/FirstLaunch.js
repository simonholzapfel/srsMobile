import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FirstLaunch = props => {
    return <View style={{...styles.root, ...props.style}}><Text>Welcome to srs, this is how it works:</Text></View>
};

const styles = StyleSheet.create({
    root:{
        flex:1,
    }
});

export default FirstLaunch;