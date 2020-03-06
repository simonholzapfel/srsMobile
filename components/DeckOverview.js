import React from 'react';
import { StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import DeckPreview from './DeckPreview';

const DeckOverview = props => {
    return (
        <ScrollView style={styles.root}>
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default DeckOverview;