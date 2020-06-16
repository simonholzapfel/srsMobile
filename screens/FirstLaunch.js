import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';

const FirstLaunch = props => {
    return (
    <View style={{...styles.root, ...props.style}}>
        <Text>Welcome to srs, this is how it works:</Text>
        <Button title="Let's get Started" onPress={() => {
            props.navigation.navigate('Login')
            AsyncStorage.setItem("introDone", "1");
        }}/>
    </View>
)};

const styles = StyleSheet.create({
    root:{
        flex:1,
    }
});

export default FirstLaunch;