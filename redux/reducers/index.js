import {combineReducers} from 'redux';
import filters from './filters';
import cosmetics from './cosmetic';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  cosmetics,
  cart,
});
export default rootReducer;