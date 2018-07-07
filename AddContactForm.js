import React from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native"
import {Constants} from "expo"
import {PropTypes} from "prop-types"

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
    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.name}/>
                <TextInput style={styles.input} value={this.state.phone}/>
                <Button title='Add Contact'/>
            </View>
        )
    }
}