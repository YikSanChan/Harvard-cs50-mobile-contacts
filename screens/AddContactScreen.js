import React from 'react';
import AddContactForm from '../AddContactForm';
import {addContact} from '../redux/actions'
import {connect} from 'react-redux'

class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contact'
    }
    handleSubmit = formState => {
        this.props.addContact(formState)
        this.props.navigation.navigate('ContactList');
    };

    render() {
        return <AddContactForm onSubmit={this.handleSubmit}/>;
    }
}

export default connect(null, {addContact: addContact})(AddContactScreen)