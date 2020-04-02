import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = props => {
    return <View style={{...styles.root, ...props.style}}><Text>This is the login page</Text></View>
};

const styles = StyleSheet.create({
    root:{
        flex: 1
    }
});

export default Login;