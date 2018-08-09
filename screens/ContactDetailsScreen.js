import React from 'react';
import {Text, View} from "react-native"

export default class ContactDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.getParam('name')
    })

    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('phone')}</Text>
                <Text>{this.props.navigation.getParam('name')}</Text>
            </View>
        );
    }
}