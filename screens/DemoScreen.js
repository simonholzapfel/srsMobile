import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import {zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';
import FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
const DemoScreen = props => {
    return (
        <View style={{ ...styles.root, ...props.style }}>
            <Button onPress={ async () => {
                const res = await DocumentPicker.getDocumentAsync({type: 'application/zip', copyToCacheDirectory: false, multiple: false});
                const path = FileSystem.cacheDirectory + "/deck"
                const zres = await unzip(res.uri, path);
                console.log(zres);
                //console.log(blob.fs.stat(res.uri))
                //console.log(fs.stat(res.uri));
                /*const string = await FileSystem.readAsStringAsync(res.uri, EncodingType.UTF8);
                console.log(string);*/
            }} title="Start Demo" />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});

export default DemoScreen;