import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const DeckPreview = props => {
    return (
        <View style={styles.root}>
            <Text>DeckPreview {this.props.id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {

    }
});

export default DeckPreview;