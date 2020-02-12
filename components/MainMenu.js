import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class MainMenu extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#f5f5f1',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%"
              }}>
                <View style={{width: '100%',height: '30%', backgroundColor: '#26d07c'}}>
                    
                </View>
                <View style={{width: '95%',height: '70%', backgroundColor: '#DBE2E9'}}>
                    
                </View>
            </View>
        );
    }
}

