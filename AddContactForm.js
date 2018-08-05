import React from 'react';
import {Button, StyleSheet, TextInput, KeyboardAvoidingView} from "react-native"
import {Constants} from "expo"

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
    }
});

export default class AddContactForm extends React.Component {
    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    getHandler = key => val => {
        this.setState({[key]: val})
    }

    validateForm = () => {
        // want to add a rule that a name should have first and last name
        const names = this.state.name.split(' ')
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3 && names.length >= 2 && names[0] && names[1]) {
            return this.setState({isFormValid: true})
        } else {
            return this.setState({isFormValid: false})
        }
    }


    handleSubmit = () => {
        // == this.props.onSubmit({name: this.state.name, phone: this.state.phone})
        // == this.props.onSubmit({...this.state})
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.getHandler('name')}
                    value={this.state.name}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={this.getHandler('phone')}
                    value={this.state.phone}
                    placeholder="Phone"
                    keyboardType="numeric" // to pop up keyboard, press cmd + k
                />
                <Button title='Submit' onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }
}