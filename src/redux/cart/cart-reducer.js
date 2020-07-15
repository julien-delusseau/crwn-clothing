import { cartActionsTypes } from './cart-types'

const initState = {
  hidden: true
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cartReducer
