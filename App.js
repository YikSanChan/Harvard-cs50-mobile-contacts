import React from 'react';

import contacts from './contacts'
import {createSwitchNavigator} from 'react-navigation'
import AddContactScreen from "./screens/AddContactScreen"
import ContactListScreen from "./screens/ContactListScreen"

/**
 * When we switch from one screen to another, we unmount the screen that we switch away from.
 * It is now no longer rendered, no longer in memory.
 */
const AppNavigator = createSwitchNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen
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

