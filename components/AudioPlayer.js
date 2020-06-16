import React, {} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Audio} from 'expo-av';
import {MaterialIcons} from '@expo/vector-icons';

const AudioPlayer = props => {
    const player = new SilentPlayer(props.file);

    return (
        <View style={{...styles.root, ...{backgroundColor: props.color}}}>
            <TouchableOpacity onPress={player.playPauseHandler}>

            </TouchableOpacity>
        </View>
    );
}

export default AudioPlayer;

export class SilentPlayer{
    constructor(file){
        this.file = file;
        this.sound = new Audio.Sound();
        this.state = false;
    }

    async play(){
        await this.sound.loadAsync(this.file);
        await this.sound.playAsync();
        this.state = true;
    }

    stop(){
        this.sound.stopAsync();
        this.state = false;
    }

    playPauseHandler(){
        if(this.state){
            this.stop();
        }
        else{
            this.play();
        }
    }
}

const styles = StyleSheet.create({
    root: {

    }
});