import React from "react"
import {SectionList, Text} from "react-native"
import {PropTypes} from "prop-types"
import Row from "./Row"

renderItem = (obj) => <Row {...(obj.item)} />

renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    // arr.reduce((accumulator, currentValue) => ..., initialValueToAccumulator)
    const contactsByLetter = props.contacts.reduce((obj, contact) => { // obj is a {letter -> array of contacts} mapping
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj, // copy all from obj
            // override obj[firstLetter]
            // || []: if obj[firstLetter] is undefined, consider it an empty array
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {}) // {} is the initial value of accumulator, i.e., obj.

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactsList