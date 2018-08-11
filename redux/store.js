import {createStore} from "redux"
import reducer from "./reducer"
import {addContact} from "./actions"

const store = createStore(reducer)

store.dispatch(addContact({name: 'evan c', phone: '1234567890'}))
store.dispatch(addContact({name: 'eve y', phone: '2345678901'}))

export default store