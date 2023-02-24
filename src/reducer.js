let initialState = {count: 0}



// filltering action yang di pilih
function reducer(state = initialState, action) {
  if(action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    };
  }
  if(action.type === 'DECREMENT') {
    return {
      count: state.count - 1
    }
  }

  if (action.type === 'RESET') {
    return {
        count: state.count  = 0
    }
  }
//   mengembalikan nilai atas action yang di minta
  return state;
}

export default reducer;