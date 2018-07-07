import React from "react"
import {SectionList} from "react-native"
import {PropTypes} from "prop-types"

const ContactsList = props => (
    <SectionList
        renderItem={props.renderItem}
        renderSectionHeader={props.renderSectionHeader}
        sections={[{ // single section with title 'A'
            title: 'A',
            data: props.contacts,
        }]}
    />
)

ContactsList.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}

export default ContactsList