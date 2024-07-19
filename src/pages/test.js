import { createStore } from 'redux'

function appReducer(prevState,action) {
    return prevState
}
const store = createStore(appReducer)
const state = store.getState();
console.log(state);