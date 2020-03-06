import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

const DeckPreview = props => {
    /*if(typeof props.deck.thumbnail === 'undefined'){

    }else{

    } */

    return (
        <TouchableHighlight style={styles.root}>
            <Image style={styles.image} source={require('../assets/defaultDeckThumb.png')}></Image>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    root: {
        
    },
    image: {
        resizeMode: 'stretch',
        width: '30%',
        height: '30%'
    }
});

export default DeckPreview;