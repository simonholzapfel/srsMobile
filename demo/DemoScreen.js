import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
const DemoScreen = props => {
    return (
        <View style={{ ...styles.root, ...props.style }}>
            <Button onPress={ () =>
                props.navigation.navigate('Demo')} title="Start Demo" />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});

export default DemoScreen;