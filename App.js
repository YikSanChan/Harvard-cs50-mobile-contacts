import React from 'react';

import contacts from './contacts'
import {createStackNavigator} from 'react-navigation'
import AddContactScreen from "./screens/AddContactScreen"
import ContactListScreen from "./screens/ContactListScreen"
import ContactDetailsScreen from "./screens/ContactDetailsScreen"

/**
 * In Stack Navigator, we keep all these routes and previous screens mounted in memory.
 * Because we need to show the screen immediately when we swipe back.
 */
const AppNavigator = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
}, {
    initialRouteName: 'ContactList'
})

export default class App extends React.Component {
    state = {
        showContacts: false,
        contacts: contacts,
    }

    addContact = newContact => {
        this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact]}))
    }

    render() {
        return <AppNavigator
            screenProps={{
                contacts: this.state.contacts,
                addContact: this.addContact
            }}
        />
    }
}

