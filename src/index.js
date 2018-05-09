import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloReducer from './reducers'
import App from './components/App'

let store = createStore(helloReducer)
console.log("print store",store);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)