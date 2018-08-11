import React from 'react';

import {
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation'
import AddContactScreen from "./screens/AddContactScreen"
import ContactListScreen from "./screens/ContactListScreen"
import ContactDetailsScreen from "./screens/ContactDetailsScreen"
import LoginScreen from "./screens/LoginScreen"
import SettingsScreen from "./screens/SettingsScreen"
import {Ionicons} from 'react-native-vector-icons'
import {fetchUsers} from "./api"
import {Provider} from 'react-redux'
import store from "./redux/store"

/**
 * In Stack Navigator, we keep all these routes and previous screens mounted in memory.
 * Because we need to show the screen immediately when we swipe back.
 */
const ContactsTab = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
}, {
    initialRouteName: 'ContactList',
})

ContactsTab.navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
            name={`ios-contacts${focused ? "" : "-outline"}`}
            size={25}
            color={tintColor}
        />
    )
};

const MainNavigator = createBottomTabNavigator({
    Contacts: ContactsTab,
    Settings: SettingsScreen,
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
        contacts: null,
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        const results = await fetchUsers()
        this.setState({contacts: results})
    }

    addContact = newContact => {
        this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
    }

    render() {
        return (
            // Provider: let the app knows about the store
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}

