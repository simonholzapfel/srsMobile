import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = props => {
    return <View style={{...styles.root, ...props.style}}><Text>Login</Text></View>
};

const styles = StyleSheet.create({
    root:{
        
    }
});

export default Login;