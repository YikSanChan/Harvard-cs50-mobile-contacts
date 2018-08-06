import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import ContactsList from '../ContactsList';
import {Constants} from "expo"

export default class ContactListScreen extends React.Component {
    state = {
        showContacts: true,
    };

    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}));
    };

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="add contact" onPress={this.showForm}/>
                <Button title="toggle contacts" onPress={this.toggleContacts}/>
                {this.state.showContacts && (
                    <ContactsList
                        contacts={this.props.screenProps.contacts}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});