import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import {zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';

const DemoScreen = props => {
    return (
        <View style={{ ...styles.root, ...props.style }}>
            <Button onPress={() => {

            }} title="Start Demo" />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});

export default DemoScreen;