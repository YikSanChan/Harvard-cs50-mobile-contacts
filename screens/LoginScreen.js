import React from "react";
import {Button, View, StyleSheet, Text, TextInput} from "react-native";

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
    }

    login = async () => {
        // auth server that allows only 1 user with {username="username", password="password"}
        const response = await fetch('http://localhost:8000', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({username: this.state.username, password: this.state.password}),
        })
        console.log(response)
        if (response.ok) {
            this.props.navigation.navigate("Main")
            return
        }
        const errMessage = await response.text()
        console.log(errMessage)
        this.setState({err: errMessage})
    };

    handleUsernameUpdate = username => {
        this.setState({username})
    }

    handlePasswordUpdate = password => {
        this.setState({password})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{this.state.err}</Text>
                <TextInput
                    placeholder="username"
                    value={this.state.username}
                    onChangeText={this.handleUsernameUpdate}
                />
                <TextInput
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordUpdate}
                />
                <Text style={styles.text}>You are currently logged out.</Text>
                <Button title="Press to Log In" onPress={this.login}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    },
    error: {
        textAlign: "center",
        color: "red"
    }
});