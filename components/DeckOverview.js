import React from 'react';
import { StyleSheet, FlatList, Dimensions, View, Text } from 'react-native';
import DeckPreview from './DeckPreview';
import { useSelector } from 'react-redux';

const DeckOverview = props => {

    const decks = useSelector(state => state.decks.myDecks);

    if (decks.length < 1)
        return (<View><Text>Try searching for some decks!</Text></View>)

    const renderGridItem = itemData => {
        return <DeckPreview
            id={itemData.item.id}
            name={itemData.item.name}
            style={styles.item}
            onPress={() => {
                props.navigation.navigate({
                    routeName: 'Deck',
                    params: {
                        deckId: itemData.item.id,
                        deckName: itemData.item.name,
                    }
                })
            }} />
    }

    return (
        <FlatList numColumns={4} style={{ ...props.style, ...styles.root }}
            keyExtractor={(item) => item.id}
            data={decks}
            renderItem={renderGridItem}
        />
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 2,
        alignContent: "flex-start",
    },
    item: {
        width: Dimensions.get('window').width / 4.5,
        margin: Dimensions.get('window').width / 100,
    }
});

export default DeckOverview;