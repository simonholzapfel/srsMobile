import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const DeckPreview = props => {
    let finStyle = {...styles.View, ...props.style}

    //get ideal aspect ration, if only one size value is given
    if(finStyle.width == null){
        finStyle.width = finStyle.height*0.6;
    }
    else if (finStyle.height == null){
        finStyle.height = finStyle.width/0.6;
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={finStyle}>
                <Text>Id is {props.id}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    View:{
        backgroundColor: 'red',
        borderColor: 'black',
        borderRadius: 15,
        alignItems:"center"
    }
});

export default DeckPreview;