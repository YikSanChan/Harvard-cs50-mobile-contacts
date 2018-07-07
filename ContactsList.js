import React from "react"
import {SectionList, Text} from "react-native"
import {PropTypes} from "prop-types"
import Row from "./Row"

renderItem = (obj) => <Row {...(obj.item)} />

renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => (
    <SectionList
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[{ // single section with title 'A'
            title: 'A',
            data: props.contacts,
        }]}
    />
)

ContactsList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactsList