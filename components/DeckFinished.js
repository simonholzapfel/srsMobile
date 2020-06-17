import React, {

} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Dimensions,
} from 'react-native';
import Image from 'react-native-scalable-image';

const DeckFinished = ({ onClose, deck, }) => {
    return <View style={styles.root}>
        <View style={styles.topField}>
            <Image source={deck.thumbnail} width={Dimensions.get("window").width} />
            <Text>You finished {deck.name}!</Text>
        </View>

        <Button title="Close" onPress={onClose} color="red" />
    </View>;
}

const styles = StyleSheet.create({
    topField: {

    },
    root: {
        flex: 1,
        justifyContent: "space-between"
    }
});

export default DeckFinished;