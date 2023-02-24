const redux = require("redux");







const rootReducer = (currentState = 0 , action) => {
  switch(action.type){
    case"INCREMENT":
    return currentState + 1
    case"DECERMENT":
    return currentState - 1
    default:
        return currentState
  }
}

const store = redux.createStore(rootReducer);
console.log(store.getState());



store.dispatch({type: "DECERMENT"});
console.log("State after INCREMENT =" ,  store.getState());