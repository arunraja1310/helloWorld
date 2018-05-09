// Actions
const HELLO_WORLD = 'HELLO_WORLD'

const helloAction = () => {
  console.log('helloWorld action')
  return {
    type: HELLO_WORLD
  }
}

// Components
class App extends React.Component {
  render() {
    return (
      <HelloWorld />
    )
  }
}
//Hello.js
const Hello = ({ onClick, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

Hello.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired
}

// Container
const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(helloAction())
    }
  }
}
// ./containers/Hellowold.js
const HelloWorld = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

// Reducers
const helloWorldReducer = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { message: 'Hello, World!' })
    default:
      return state
  }
}

const helloReducer = Redux.combineReducers({
  helloWorld: helloWorldReducer
})

// Index
let store = Redux.createStore(helloReducer)

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
)
