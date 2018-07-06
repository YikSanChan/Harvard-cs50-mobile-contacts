import {StyleSheet, Text, View} from "react-native"
import React from "react"

const Row = props => (
    <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {padding: 20},
})

export default Row