import { Action_types } from '../contants/Actions_types'

const initialState = {
  products: [],
   
}
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Action_types.Set_Products:
      return {...state, products : payload};

    default:
      return state;
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case Action_types.Selected_Products:
        return {...state, ...payload};

        case Action_types.Remove_Selected_Products:
          return {};
  
      default:
        return state;
    }
  }