// import {createStore} from 'redux'
const {createStore} = require('redux')

// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const DEFAULT_STATE = {user: {}, contacts: []}

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state, action) => {
    if (action.type === UPDATE_CONTACT) {
        return [...state, action.payload]
    }
    return state
}

const userReducer = (state, action) => {
    if (action.type === UPDATE_USER) {
        return merge(state, action.payload)
    }
    return state
}

const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contacts: contactReducer(state.contacts, action),
})

// action creators
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update,
})

const addContact = contact => ({
    type: UPDATE_CONTACT,
    payload: contact
})

const store = createStore(reducer, DEFAULT_STATE)
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
store.dispatch(addContact({name: 'evan c', number: '1234567890'}))
store.dispatch(addContact({name: 'eve y', number: '2345678901'}))

console.log(store.getState())