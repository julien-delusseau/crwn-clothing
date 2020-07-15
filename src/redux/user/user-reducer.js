const initState = {
  currentUser: null
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'set_current_user':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer
