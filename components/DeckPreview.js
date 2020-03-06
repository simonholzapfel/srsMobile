import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

const DeckPreview = props => {
    /*if(typeof props.deck.thumbnail === 'undefined'){

    }else{

    } */

    return (
        <TouchableOpacity style={{...props.style, ...styles.root}} onPress={props.onPress.bind(this, props.id)}>
            <Image style={styles.image} source={require('../assets/defaultDeckThumb.png')}></Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    root: {
        
    },
    image: {
        resizeMode: 'stretch'
    }
});

export default DeckPreview;