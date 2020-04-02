import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Search = props => {
    return <View style={{...styles.root, ...props.style}}><Text>Login</Text></View>
};

const styles = StyleSheet.create({
    root:{
        
    }
});

export default Search;