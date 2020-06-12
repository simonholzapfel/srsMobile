import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';

const DeckPreview = props => {
    let finStyle = {...styles.View, ...props.style}

    //get ideal aspect ratio, if only one size value is given
    if(!finStyle.width){
        finStyle.width = finStyle.height*0.6;
    }
    else if (!finStyle.height){
        finStyle.height = finStyle.width/0.6;
    }

    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={finStyle}>
                <Image source={props.thumbnail} style={styles.image} width={finStyle.width}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    View:{
        backgroundColor: 'gray',
        borderColor: 'black',
        borderRadius: 15,
        alignItems:"center",
        justifyContent: "space-around"
    },
    image: {
        
    }
});

export default DeckPreview;