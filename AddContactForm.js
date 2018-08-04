import React from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native"
import {Constants} from "expo"

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {
        paddingTop: Constants.statusBarHeight,
    }
});

export default class AddContactForm extends React.Component {
    state = {
        name: '',
        phone: '',
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        this.setState({phone})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleNameChange}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={this.handlePhoneChange}
                    value={this.state.phone}
                    keyboardType="numeric" // problem: doesn't pop numeric keyboard
                />
                <Button title='Add Contact' />
            </View>
        )
    }
}