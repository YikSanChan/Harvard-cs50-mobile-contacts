import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import ContactsList from '../ContactsList';
import {Constants} from "expo"
import store from '../redux/store'

export default class ContactListScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Contacts',
        headerRight: <Button title="Add" onPress={() => {
            navigation.navigate('AddContact')
        }
        }/>
    })

    state = {
        showContacts: true,
    };

    render() {
        const contacts = store.getState().contacts
        return (
            <View style={styles.container}>
                {this.state.showContacts && (
                    <ContactsList
                        contacts={contacts}
                        onSelectContact={(contact) => {
                            this.props.navigation.navigate('ContactDetails', {phone: contact.phone, name: contact.name})
                        }}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});