import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const Search = props => {
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        props.navigation.setParams({ setInputText: setInputText });
      }, [setInputText]);


    //debug
    // /api/v1/decks?search=keyword1+keyword2&sort=new&page=1
    var decks = useSelector(state => state.decks.decks).filter(deck => {
        return deck.name.toLowerCase().includes(inputText.toLowerCase());
    });

    console.log(decks);

    return (
        <View style={{...styles.root, ...props.style}}>
            <UserResult/>
            <FlatList
                data={decks}
                renderItem={renderListElement}
            />
        </View>
    );
};

Search.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <TextInput style={styles.input} onChangeText={navigation.getParam('setInputText')} autoCorrect={false} returnKeyType={"search"} placeholder={"Search"} maxLength={40} autoFocus/>
    }
}

const styles = StyleSheet.create({
    root:{
        
    },
    input: {
        flex: 1,
    }
});

export default Search;

const renderListElement = item => {
    return <Text>{item.name}</Text>
}

const UserResult = props => {
    // if textInput === uname-slug
    return <Text> test </Text>
}