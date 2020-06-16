import React, { useState } from 'react';
import { StyleSheet, Button, FlatList, View, Text, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
import Colors from '../constants/Colors';

const Card = ({ data, cardHandler, progress, id }) => {
    const [flipped, setFlipped] = useState(false);

    //Buttons
    const Front = () => (
        <Button title="Flip" style={styles.button} onPress={() => {
            setFlipped(true);
        }} />);
    const Back = () => (
        <View style={styles.backButtons}>
            <Button title="Bad" color='red' style={styles.button} onPress={() => { setFlipped(false); cardHandler({ score: 0, deckId: id }); }} />
            <Button title="Okay" color="orange" style={styles.button} onPress={() => { setFlipped(false); cardHandler({ score: 1, deckId: id }); }} />
            <Button title="Good" color="yellow" style={styles.button} onPress={() => { setFlipped(false); cardHandler({ score: 2, deckId: id }); }} />
            <Button title="Great" color="green" style={styles.button} onPress={() => { setFlipped(false); cardHandler({ score: 3, deckId: id }); }} />
        </View>);
    const Buttons = flipped ? Back : Front;

    //progressBar
    const progressStyle = {
        width: (progress * 100) + "%",
    }

    return (
        <View style={{ ...styles.root }}>
            <View style={{ ...styles.progressStyle, ...progressStyle }} />
            <FlatList style={styles.list}
                data={flipped ? data.back : data.front}
                keyExtractor={item => "" + (flipped ? data.back : data.front).indexOf(item)}
                renderItem={renderItem} />
            <Buttons />
        </View>
    );
}

const renderItem = arg => {
    const item = arg.item;
    if (item.type === "text") {
        return (<Text style={{ ...styles.text, ...item.style }}>{item.text}</Text>);
    }
    else if (item.type === "image") {
        return (<Image style={{ ...styles.image, ...item.style }} width={Dimensions.get('window').width} source={item.image} />);
    }
    else if (item.type === "audio") {
        throw new Error("This path is not implemented YET.");
    }

    throw new Error("You should not be here! >:(");
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    button: {

    },
    text: {
        textAlign: "center",
        fontSize: 16,
    },
    image: {
        resizeMode: "contain",
    },
    backButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    progressStyle: {
        backgroundColor: Colors.primary,
        height: '1%',
    },
    list: {

    },
});

export default Card;
