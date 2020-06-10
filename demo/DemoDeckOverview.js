import React from 'react';
import { StyleSheet, FlatList, Dimensions, View, Text } from 'react-native';
import DeckPreview from '../components/DeckPreview';
import { demoDecks } from '../data/dummy';

const DeckOverview = props => {

    const decks = demoDecks;

    if (decks.length < 1)
        return (<View><Text>Try searching for some decks!</Text></View>)

    const renderGridItem = itemData => {
        return <DeckPreview
            id={"" + decks.indexOf(itemData.item)}
            name={itemData.item.name}
            thumbnail={itemData.item.thumbnail}
            style={styles.item}
            onPress={() => {
                props.navigation.navigate({
                    routeName: 'DemoDeck',
                    params: {
                        deck: itemData.item
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