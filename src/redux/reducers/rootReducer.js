import { combineReducers } from 'redux';
import { productsReducer as products } from './productsReducer';

export const rootReducer = combineReducers({
    products,
});