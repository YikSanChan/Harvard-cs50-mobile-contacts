import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import ContactsList from '../ContactsList';
import {Constants} from "expo"
import {connect} from 'react-redux'

class ContactListScreen extends React.Component {
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
                        contacts={this.props.contacts}
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

const mapStateToProps = state => ({
    contacts: state.contacts,
})

// the component will subscribe to Redux store updates.
// This means that any time the store is updated, mapStateToProps will be called
// The results of mapStateToProps will be merged into the component’s props,
// and will be used by contacts={this.props.contacts}
export default connect(mapStateToProps)(ContactListScreen)