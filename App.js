import React from 'react';

import contacts from './contacts'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation'
import AddContactScreen from "./screens/AddContactScreen"
import ContactListScreen from "./screens/ContactListScreen"
import ContactDetailsScreen from "./screens/ContactDetailsScreen"
import LoginScreen from "./screens/LoginScreen"

/**
 * In Stack Navigator, we keep all these routes and previous screens mounted in memory.
 * Because we need to show the screen immediately when we swipe back.
 */
const MainNavigator = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
}, {
    initialRouteName: 'ContactList',
})

/**
 * Composing Navigator
 */
const AppNavigator = createSwitchNavigator({
    Main: MainNavigator,
    Login: LoginScreen,
}, {
    initialRouteName: 'Login',
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

