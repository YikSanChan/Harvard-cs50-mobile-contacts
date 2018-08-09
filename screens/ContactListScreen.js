import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import ContactsList from '../ContactsList';
import {Constants} from "expo"

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
        return (
            <View style={styles.container}>
                {this.state.showContacts && (
                    <ContactsList
                        contacts={this.props.screenProps.contacts}
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