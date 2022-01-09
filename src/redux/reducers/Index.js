import {combineReducers} from 'redux'
import { ProductReducer, selectedProductReducer } from './ProductReducer'

const reducer = combineReducers(
    {
        allproducts: ProductReducer,
        product : selectedProductReducer,
    }
);
export default reducer;