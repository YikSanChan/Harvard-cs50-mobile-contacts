import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo'

import contacts from './contacts'

export default class App extends React.Component {
    state = {
        showContacts: false,
    }

    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    // problems:
    // 1. cannot scroll down. (fixed)
    // 2. warning: child in an array should have a unique key prop. (fixed)
    // 3. toggle doesn't work.
    render() {
        return (
            <View style={styles.container}>
                <Button title="toggle contacts" onPress={this.toggleContacts}/>
                <ScrollView>
                    {contacts.map(contact => (
                        <Text key={contact.key}>{contact.name}</Text>
                    ))}
                </ScrollView>
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