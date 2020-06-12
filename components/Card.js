import React, { useState } from 'react';
import { StyleSheet, Button, FlatList, View, Text, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

const Card = ({ data, cardHandler }) => {
    const [pageData, setPageData] = useState(data.front);
    const [flipped, setFlipped] = useState(false);

    const Front = () => (
        <Button title="Flip" style={styles.button} onPress={() => {
            setPageData(data.back);
            setFlipped(true);
        }} />);
    const Back = () => (
        <View style={styles.backButtons}>
            <Button title="Bad" color='red' style={styles.button} onPress={() => cardHandler(0)} />
            <Button title="Okay" color="orange" style={styles.button} onPress={() => cardHandler(1)} />
            <Button title="Good" color="yellow" style={styles.button} onPress={() => cardHandler(2)} />
            <Button title="Great" color="green" style={styles.button} onPress={() => cardHandler(3)} />
        </View>);
    const Buttons = flipped ? Back : Front;

    return (
        <View style={{ ...styles.root }}>
            <FlatList data={pageData}
                keyExtractor={item => "" + pageData.indexOf(item)}
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

    },
    image: {
        resizeMode: "contain",
    },
    backButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    }
});

export default Card;