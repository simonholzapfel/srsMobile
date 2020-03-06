import React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import Elevated from './Elevated';

const styles = StyleSheet.create({
    root: {
        
    }
});

const ElevatedTouchable = props =>{
    return(
        <TouchableHighlight style={{...styles.root, ...props.style}} onPress={this.props.onPress}>
            <Elevated>{props.children}</Elevated>
        </TouchableHighlight>
    );
}