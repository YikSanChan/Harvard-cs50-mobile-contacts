import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo'

import contacts from './contacts'
import Row from './Row'

export default class App extends React.Component {
    state = {
        showContacts: false,
    }

    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    // problem: takes a long time to render all contacts.
    // because ScrollView will render all of its children before appearing.
    render() {
        return (
            <View style={styles.container}>
                <Button title="toggle contacts" onPress={this.toggleContacts}/>
                {this.state.showContacts && (
                    <ScrollView>
                        {contacts.map(contact => <Row {...contact} />)}
                    </ScrollView>
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