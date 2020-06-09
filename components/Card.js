import React, { useState } from 'react';
import { StyleSheet, Touchable, Image, Button, FlatList, View, Text } from 'react-native';

const Card = props => {
    const [data, setData] = useState(props.data.front);
    const [flipped, setFlipped] = useState(false);

    const Front = () => (<Button title="Flip" onPress={() => {
        console.log("flipping");
        setData(props.data.back);
        setFlipped(true);
    }} />);
    const Back = () => (<View>
        <Button title="Bad" color='red' />
        <Button title="Okay" color="orange" />
        <Button title="Good" color="yellow" />
        <Button title="Great" color="green" />
    </View>);
    const Buttons = flipped ? Back : Front;

    return (
        <View style={{ ...styles.root }}>
            <FlatList data={data}
                keyExtractor={item => "" + data.indexOf(item)}
                renderItem={renderItem} />
            <Buttons />
        </View>
    );
}

const renderItem = arg => {
    const item = arg.item;
    if (item.type === "text") {
        return (<Text style={item.style}>{item.text}</Text>);
    }
    else if (item.type === "image") {
        return (<Image style={item.style} source={item.image} />);
    }
    else if (item.type === "audio") {
        throw new Error("This path is not implemented YET.");
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default Card;