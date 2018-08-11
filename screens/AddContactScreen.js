import React from 'react';
import AddContactForm from '../AddContactForm';
import store from '../redux/store'
import {addContact} from '../redux/actions'

export default class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contact'
    }
    handleSubmit = formState => {
        store.dispatch(addContact(formState))
        this.props.navigation.navigate('ContactList');
    };

    render() {
        return <AddContactForm onSubmit={this.handleSubmit}/>;
    }
}