// src/app/store.js
// import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { createStore,applyMiddleware} from 'redux'
// import counterReducer from './counterSlice.js';
import testMiddleware from './testMiddleware.js';



const store = createStore(applyMiddleware(testMiddleware))

export default store


// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
