import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class MainMenu extends Component{
    render(){
        return(
            <View style={style}>
                <View style={{width: '90%',height: '90%', backgroundColor: '#DBE2E9'}}>
                    <Text>MainMenu</Text>
                </View>
                <Text>Bottom</Text>
            </View>
        );
    }
}

let style = style={
    flex: 1,
    backgroundColor: '#f5f5f1',
    justifyContent: 'center',
    alignItems: 'center'
}