import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import DeckListItem from '../components/DeckListItem';
import UserListItem from '../components/UserListItem';

const Search = props => {
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        props.navigation.setParams({ setInputText: setInputText });
      }, [setInputText]);

    //debug
    // /api/v1/decks?search=keyword1+keyword2&sort=new&page=1
    const user = useSelector(state => state.users.allUsers).find(user => user.name.toLowerCase()+"-"+user.slug.toLowerCase() === inputText.toLowerCase());
    const decks = useSelector(state => state.decks.allDecks).filter(deck => deck.name.toLowerCase().includes(inputText));
    const response = {user, decks};

    return (
        <View style={{...styles.root, ...props.style}}>
            <UserResult userInfo={response.user}/>
            <FlatList
                data={response.decks}
                renderItem={data => {
                    return <DeckListItem deck={data.item}/>
                }}
            />
        </View>
    );
};

Search.navigationOptions = ({navigation}) => ({
        headerTitle: () => <TextInput style={styles.input} onChangeText={navigation.getParam('setInputText')} autoCorrect={false} returnKeyType={"search"} placeholder={"Search"} maxLength={40} autoFocus/>
})

const styles = StyleSheet.create({
    root:{
        
    },
    input: {
        flex: 1,
    }
});

export default Search;

export const UserResult = props => {
    if(props.userInfo != undefined)
    return <UserListItem onPress={props.onPress} userInfo={props.userInfo}/>;
    return <View></View>;
}