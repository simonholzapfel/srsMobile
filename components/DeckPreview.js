import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

const DeckPreview = props => {
    /*if(typeof props.deck.thumbnail === 'undefined'){

    }else{

    } 
    
    <Image style={styles.image} source={require('../assets/defaultDeckThumb.png')}></Image>
    */

    return (
        <TouchableOpacity onPress={props.onPress.bind(this, props.id)}>
            <View style={{...props.style, ...styles.debugView}}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
       
    },
    debugView:{
        backgroundColor: 'red',
        borderColor: 'black',
        borderRadius: 40,
    }
});

export default DeckPreview;