import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors'
import DeckPreview from './DeckPreview';
import { useSelector } from 'react-redux';

const ContinueDeck = props => {
    const info = useSelector(state => state.decks.lastUsed);

    if (info == undefined)
        return <View></View>

    return (
        <View style={{ ...props.style, ...styles.root }}>
            <DeckPreview id={info.id} name={info.name} style={styles.preview} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Deck',
                    params: {
                        deckId: info.id,
                        deckName: info.name,
                    }
                })
            }} />
            <View>
                <Text>Continue last deck</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        marginTop: 10,
        width: '95%',
        height: 120,
        backgroundColor: Colors.primary,
        borderRadius: 12,
        flexDirection: "row"
    },
    preview: {
        height: 120,
        borderRadius: 12,
        marginRight: 4,
    }
});

export default ContinueDeck;