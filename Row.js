import {StyleSheet, Text, TouchableOpacity} from "react-native"
import React from "react"

const Row = props => (
    <TouchableOpacity style={styles.row} onPress={() => {
        props.onSelectContact(props)
    }}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    row: {padding: 20},
})

export default Row