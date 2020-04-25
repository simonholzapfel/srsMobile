import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

//if no uid in nav params => my profile
const UserProfile = props => {
    let user;

    if(props.navigation.getParam('id') == undefined){
        UserProfile.navigationOptions =  {
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                    title="Search"
                    iconName="md-settings"
                    onPress={() => {
                      props.navigation.navigate('Settings');
                    }}
                    />
                </HeaderButtons>;
            }
        }

        user = useSelector(state => state.users.myUser);
    }
    else{
        user = useSelector(state => state.users).find(user => user.id === props.navigation.getParam('id')); // todo maybe change //if user not in repo...
    }

    return(
        <View style={styles.view}>
            <Text>{user.name}</Text>
            <Text>{user.slug}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex:1
    }
});

export default UserProfile;