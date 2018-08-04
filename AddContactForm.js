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
        isFormValid: false,
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) { // +"123" -> 123, +"123a" -> NaN; ensure phone is a numeric string
            this.setState({phone})
        }
    }

    handleSubmit = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
            // == this.props.onSubmit({name: this.state.name, phone: this.state.phone})
            // == this.props.onSubmit({...this.state})
            this.props.onSubmit(this.state)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleNameChange}
                    value={this.state.name}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={this.handlePhoneChange}
                    value={this.state.phone}
                    placeholder="Phone"
                    keyboardType="numeric" // problem: doesn't pop numeric keyboard
                />
                <Button title='Submit' onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </View>
        )
    }
}