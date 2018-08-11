const fetch = require('isomorphic-fetch')

// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this))
        } else {
            console.log('received an action:', action.type)
            this.state = this.reducer(this.state, action)
        }
    }
}

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

// async action creator
const logInUser = (username, password) => dispatch => {
    dispatch({type: 'LOG_IN_SENT'})
    userLogin(username, password)
        .then(() => {
            dispatch({type: 'LOG_IN_SUCCESS'})
        })
        .catch(err => {
            dispatch({type: 'LOG_IN_REJECTED'})
        })
}

const userLogin = async (username, password) => {
    // auth server that allows only 1 user with {username="username", password="password"}
    const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username, password}),
    })

    if (response.ok) {
        return true
    }
    const errMessage = await response.text()
    throw new Error(errMessage)
}

const store = new Store(reducer, DEFAULT_STATE)
store.dispatch(logInUser('username', 'password'))
// store.dispatch(updateUser({foo: 'foo'}))
// store.dispatch(updateUser({bar: 'bar'}))
// store.dispatch(updateUser({foo: 'baz'}))
// store.dispatch(addContact({name: 'evan c', number: '1234567890'}))
// store.dispatch(addContact({name: 'eve y', number: '2345678901'}))

console.log(store.getState())